import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import { ctx, UPDATE_PAPERS } from "./Wraper";

const Controls = () => {
  const { hhh, dispatch } = useContext(ctx);

  const handleChange = (event, newValue) => {
    dispatch({ type: UPDATE_PAPERS, n: newValue });
  };

  return (
    <Slider
      defaultValue={hhh}
      onChange={handleChange}
      aria-labelledby="continuous-slider"
    />
  );
};

export default Controls;
