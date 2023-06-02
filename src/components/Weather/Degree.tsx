import React from "react";

const Degree = ({ value }: { value: number }): JSX.Element => {
  return (
    <>
      {Math.round(value)}<span>&#8451;</span>
    </>
  );
};

export default Degree;
