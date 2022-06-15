import React from "react";
import { useEffect, useRef } from "react";

const Input = (props) => {
  
  const changeHandler = () => {};
  const focusHandler = () => {}

  return (
    <input
      type="number"

      className="after"
      placeholder="0"
      onKeyDown={changeHandler}
      onFocus={focusHandler}
      required
    />
  );
};

export default Input;
