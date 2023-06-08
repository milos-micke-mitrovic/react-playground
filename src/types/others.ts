export type GeoOptionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type ForecastType = {
  name: string;
  country: string;
  list: [
    {
      dt: number;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: [
        {
          main: string;
          icon: string;
          description: string;
        }
      ];
      wind: {
        speed: number;
        gust: number;
        deg: number;
      };
      clouds: {
        all: number;
      };
      pop: number;
      visibility: number;
    }
  ];
  sunrise: number;
  sunset: number;
};

export type GameOptionsType = {
  category: string;
  pace: string;
  cardsCount: number;
};

export type GameImageType = {
  alt: string;
  avg_color: string;
  height: number;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  url: string;
  width: number;
  src: {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  };
};

export type GameCardType = {
  id: number;
  uniqueId: number;
  url: string;
  isShown: boolean;
  isFound: boolean;
};
