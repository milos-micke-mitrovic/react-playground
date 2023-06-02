import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../components/PageTitle";

interface Paws {
  x: number;
  y: number;
}

const Paws = (): JSX.Element => {
  const [paws, setPaws] = useState<Paws[]>([]);
  const [cachedPaws, setCachedPaws] = useState<Paws[]>([]);

  const draw = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setPaws([...paws, { x: clientX, y: clientY }]);
  };

  const undo = () => {
    if (paws.length > 0) {
      const newPaws = [...paws];
      const lastAddedPaw = newPaws.pop() as Paws;
      setPaws(newPaws);
      setCachedPaws([...cachedPaws, lastAddedPaw]);
    }
  };

  const redo = () => {
    if (cachedPaws.length > 0) {
      const newCachedPaws = [...cachedPaws];
      const lastCachedPaw = newCachedPaws.pop() as Paws;
      setCachedPaws(newCachedPaws);
      setPaws([...paws, lastCachedPaw]);
    }
  };

  return (
    <>
      <PageTitle title="play-with-paws" icon={faPaw} />

      <div className="w-full h-full flex flex-col">
        <div className="w-full flex items-center justify-center gap-1">
          <button
            onClick={undo}
            disabled={paws.length === 0}
            className={paws.length === 0 ? "cursor-not-allowed" : ""}
          >
            <FontAwesomeIcon className="text-green" icon={faUndo} />
          </button>

          <button
            onClick={redo}
            disabled={cachedPaws.length === 0}
            className={cachedPaws.length === 0 ? "cursor-not-allowed" : ""}
          >
            <FontAwesomeIcon className="text-green" icon={faRedo} />
          </button>
        </div>

        <div onClick={draw} className="border border-green mt-2 h-48">
          {paws.map(({ x, y }: Paws, i: number) => (
            <div
              key={i}
              className="absolute translate-y-[-50%] translate-x-[-50%]"
              style={{ left: x, top: y }}
            >
              <FontAwesomeIcon className="text-green" icon={faPaw} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Paws;
