import { IBank } from "@constants/banks";

export interface ICurrency {
  meta: { last_updated_at: string };
  data: {
    [currencyCode: string]: {
      code: string;
      name?: string;
      value: number;
    };
  };
}

export interface IProps {}

export interface IMapMarker {
  addClassName(className: string): void;
  removeClassName(className: string): void;
  getLngLat(): { lng: number; lat: number };
}

export interface IState {
  filledBanks: IBank[];
  mapMarkers: IMapMarker[];
  searchWord: string;
}
