import React, { useContext } from "react";
import { ctx, UPDATE_PAPERS } from "./Wraper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Drop = () => {
  const { hhh, xxx, mmm, dispatch } = useContext(ctx);

  const handleChange = (event, newValue) => {
    dispatch({ type: UPDATE_NAME, xxx: newValue });
  };
  return (
    <>
      <Select value={xxx} onChange={handleChange}>
        <MenuItem value={"hi"}>Hi</MenuItem>
        <MenuItem value={"hello"}>Hello</MenuItem>
      </Select>
      <Select value={mmm}>
        <MenuItem value={"hery"}>Hery</MenuItem>
        <MenuItem value={"tom"}>Tom</MenuItem>
      </Select>
    </>
  );
};

export default Drop;
