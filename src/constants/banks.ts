interface ICoords {
  longitude: number;
  latitude: number;
}

export interface IBank {
  name: string;
  coords: ICoords;
  currencies?: string[];
}

export const banks: IBank[] = [
  {
    name: "Belinvestbank",
    coords: {
      longitude: 27.556055,
      latitude: 53.916811,
    },
    currencies: ["USD", "USDC", "BYN", "RUB", "BYR"],
  },
  {
    name: "Alfabank",
    coords: {
      longitude: 27.612775,
      latitude: 53.924468,
    },
    currencies: ["USD", "EUR", "BYN", "RUB", "AUD"],
  },
  {
    name: "Belarusbank",
    coords: {
      longitude: 27.624749,
      latitude: 53.955644,
    },
    currencies: ["USD", "USDC", "BYN", "RUB", "BYR"],
  },
  {
    name: "Statusbank",
    coords: {
      longitude: 27.535861,
      latitude: 53.964215,
    },
    currencies: ["EUR", "USDC", "BYN", "RUB"],
  },
  {
    name: "Belagroprombank",
    coords: {
      longitude: 27.487792,
      latitude: 53.93814,
    },
    currencies: ["EUR", "USDC", "BYN", "RUB"],
  },
  {
    name: "Technobank",
    coords: {
      longitude: 27.434919,
      latitude: 53.90857,
    },
    currencies: ["USD", "USDC", "BYN", "RUB"],
  },
  {
    name: "MTBank",
    coords: {
      longitude: 27.498221,
      latitude: 53.874981,
    },
    currencies: ["USD", "EUR", "BYN", "RUB"],
  },
  {
    name: "Alfabank",
    coords: {
      longitude: 27.569494,
      latitude: 53.843894,
    },
    currencies: ["BYR", "USDC", "ADA", "RUB"],
  },
  {
    name: "BSBbank",
    coords: {
      longitude: 27.465235,
      latitude: 53.860763,
    },
    currencies: ["ADA", "USDC", "BYN", "RUB"],
  },
  {
    name: "Belarusbank",
    coords: {
      longitude: 27.608292,
      latitude: 53.857534,
    },
    currencies: ["USD", "ADA", "BYN", "RUB"],
  },
  {
    name: "Sberbank",
    coords: {
      longitude: 27.606325,
      latitude: 53.898942,
    },
    currencies: ["USD", "USDC", "ADA", "RUB"],
  },
];
