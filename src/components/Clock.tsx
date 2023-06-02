import React from "react";
import useTime from "../hooks/useTime";
import Spinner from "./Spinner";

const Clock = (): JSX.Element => {
  const time = useTime();

  return !time.hours ? (
    <Spinner />
  ) : (
    <div className="h-80 w-80 md:h-96 md:w-96 border border-green rounded-full absolute">
      <div
        style={{ transform: `rotate(${time.hours}deg)` }}
        className={`absolute h-1 w-1 top-[50%] left-[50%]
        after:content-[''] after:h-28 after:w-1 after:left-[50%]
        after:translate-x-[-50%] after:bg-green after:absolute after:bottom-0`}
      ></div>

      <div
        style={{ transform: `rotate(${time.minutes}deg)` }}
        className={`absolute h-1 w-1 top-[50%] left-[50%]
        after:content-[''] after:h-36 after:w-0.5 after:left-[50%]
        after:translate-x-[-50%] after:bg-light-green after:absolute after:bottom-0`}
      ></div>

      <div
        style={{ transform: `rotate(${time.seconds}deg)` }}
        className={`absolute h-1 w-1 top-[50%] left-[50%]
        after:content-[''] after:h-40 after:w-px after:left-[50%]
        after:translate-x-[-50%] after:bg-orange after:absolute after:bottom-0`}
      ></div>
    </div>
  );
};

export default Clock;
