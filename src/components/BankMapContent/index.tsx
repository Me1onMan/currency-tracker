import "mapbox-gl/dist/mapbox-gl.css";

import axios from "axios";
import CurrencySearchBar from "components/CurrencySearchBar";
import mapboxgl from "mapbox-gl";
import React, { Component, createRef } from "react";

// @ts-expect-error @ as src
import { banks, IBank } from "@/constants/banks";
// @ts-expect-error @ as src
import { setRandomCurrenciesToBank } from "@/utils/setRandomCurrenciesToBank";

import { MapContainer, MapContentContainer } from "./styled";

const ACCESS_TOKEN =
  "pk.eyJ1IjoieHllcm1pa3giLCJhIjoiY2xyYXBrZ3lmMGhlbjJxcGp0eTFjYmc5NSJ9.MeXZnYQp9VmvxUdozvOtlA";

interface ICurrency {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      name?: string;
      value: number;
    };
  };
}

interface IProps {}

interface IState {
  banks: IBank[];
  mapMarkers: any[];
  searchWord: string;
}

export default class BankMapContent extends Component<IProps, IState> {
  mapContainerRef: React.RefObject<HTMLDivElement | null>;

  constructor(props: IProps) {
    super(props);
    this.mapContainerRef = createRef();
    this.state = {
      banks,
      searchWord: "",
      mapMarkers: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): void {
    const { banks } = this.state;

    mapboxgl.accessToken = ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [27.561822, 53.90679],
      zoom: 11,
    });

    const mapMarkers: any[] = [];

    banks.forEach((bank) => {
      const h3 = document.createElement("p");
      h3.innerHTML = bank.name;
      h3.style.color = "#000";
      const marker = new mapboxgl.Marker({ color: "#ff0000" });
      marker
        .setLngLat([bank.coords.longitude, bank.coords.latitude])
        .setPopup(new mapboxgl.Popup().setDOMContent(h3))
        .addTo(map);
      mapMarkers.push(marker);
    });

    this.setState({ mapMarkers });

    axios
      .get(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_A1EqusuOPUwszJMymwnAoeqG1muIzyr1X7CwNn4t",
      )
      .then((response: { data: ICurrency }) => {
        console.log("SEND REQUEST...");
        localStorage.setItem("currencyData", JSON.stringify(response.data));
        this.setState({ banks: setRandomCurrenciesToBank(30) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(): void {
    const { banks, searchWord, mapMarkers } = this.state;
    const filteredBanks = banks.filter((bank) =>
      bank.currencies.includes(searchWord),
    );
    if (searchWord === "") {
      mapMarkers.forEach((marker) => marker.removeClassName("marker-disabled"));
      return;
    }
    mapMarkers.forEach((marker) => marker.addClassName("marker-disabled"));
    filteredBanks.forEach((bank) => {
      mapMarkers.forEach((marker) => {
        const markerCoords = marker.getLngLat();

        if (
          markerCoords.lng === bank.coords.longitude &&
          markerCoords.lat === bank.coords.latitude
        ) {
          marker.removeClassName("marker-disabled");
        }
      });
    });
  }

  handleChange = (newWord: string) => {
    this.setState({ searchWord: newWord.toUpperCase() });
  };

  render() {
    const { searchWord } = this.state;
    return (
      <MapContentContainer>
        {localStorage.getItem("currencyData") && (
          <CurrencySearchBar
            handleChange={this.handleChange}
            searchWord={searchWord}
          />
        )}
        <MapContainer ref={this.mapContainerRef} />
      </MapContentContainer>
    );
  }
}
