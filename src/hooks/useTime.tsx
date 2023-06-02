import { useEffect, useState } from "react";

const useTime = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      setHours(Math.floor((date.getHours() * 360) / 12));
      setMinutes(Math.floor((date.getMinutes() * 360) / 60));
      setSeconds(Math.floor((date.getSeconds() * 360) / 60));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { hours, seconds, minutes };
};

export default useTime;
