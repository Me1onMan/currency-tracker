import React, { Component, createRef } from "react";
import CurrencySearchBar from "@components/CurrencySearchBar";
import { banks, IBank } from "@constants/banks";
import { CURRENCIES_DATA } from "@constants/localStorage";
import setRandomCurrenciesToBank from "@utils/setRandomCurrenciesToBank";
import axios from "axios";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { MAP_CONFIG } from "./config";
import { ICurrency, IMapMarker, IProps, IState } from "./interfaces";
import { MapContainer, MapContentContainer } from "./styled";

export default class BankMapContent extends Component<IProps, IState> {
  mapContainerRef: React.RefObject<HTMLDivElement | null>;

  constructor(props: IProps) {
    super(props);
    this.mapContainerRef = createRef();
    this.state = {
      filledBanks: [],
      searchWord: "",
      mapMarkers: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(): void {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      ...MAP_CONFIG,
      container: this.mapContainerRef.current,
    });

    const mapMarkers: IMapMarker[] = [];

    banks.forEach((bank: IBank) => {
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

    if (!localStorage.getItem(CURRENCIES_DATA)) {
      const apiKey = process.env.CURRENCY_API_KEY;
      const apiRequest = process.env.CURRENCY_API_REQUEST;
      axios
        .get(`${apiRequest}${apiKey}`)
        .then((response: { data: ICurrency }) => {
          localStorage.setItem(CURRENCIES_DATA, JSON.stringify(response.data));
          this.setState({ filledBanks: setRandomCurrenciesToBank(30) });
        })
        .catch((error) => {
          throw new Error(`Error while loading currency data: ${error}`);
        });
    } else {
      this.setState({ filledBanks: setRandomCurrenciesToBank(30) });
    }
  }

  componentDidUpdate(): void {
    const { filledBanks, searchWord, mapMarkers } = this.state;
    const filteredBanks = filledBanks.filter((bank) =>
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
      <MapContentContainer id="cy-bank-map">
        {localStorage.getItem(CURRENCIES_DATA) && (
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
