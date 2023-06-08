import { useEffect, useState } from "react";

import { radnomNumber } from "../utils/others";
import { GameImageType, GameOptionsType } from "../types/others";

const useGetImages = (gameOptions: GameOptionsType | null) => {
  const [images, setImages] = useState<GameImageType[]>([]);

  const buildUrl = () => {
    const url = "https://api.pexels.com/v1/search";

    const searchQuery = gameOptions
      ? `?query=${
          gameOptions.category
        }&orientation=square&size=small&per_page=${
          gameOptions.cardsCount / 2
        }&page=${radnomNumber(10, 1)}`
      : "";

    return url + searchQuery;
  };

  const fetchPics = () => {
    fetch(buildUrl(), {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    })
      .then((data) => data.json())
      .then((data) => setImages(data.photos))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (!gameOptions) return;

    fetchPics();
  }, [gameOptions]);

  return images;
};

export default useGetImages;
