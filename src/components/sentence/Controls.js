import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import { ctx, UPDATE_PAPERS } from "./Wraper";

const Controls = () => {
  const { papers, dispatch } = useContext(ctx);

  const handleChange = (event, newValue) => {
    dispatch({ type: UPDATE_PAPERS, papers: newValue });
  };

  return (
    <Slider
      defaultValue={papers}
      onChange={handleChange}
      aria-labelledby="continuous-slider"
    />
  );
};

export default Controls;
