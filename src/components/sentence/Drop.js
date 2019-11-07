import React, { useContext } from "react";
import { ctx, UPDATE_PAPERS, UPDATE_GREET, UPDATE_NAME } from "./Wraper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Drop = () => {
  const { papers, greet, name, dispatch } = useContext(ctx);

  const handleGreetChange = event => {
    dispatch({ type: UPDATE_GREET, greet: event.target.value });
  };

  const handleNameChange = event => {
    dispatch({ type: UPDATE_NAME, name: event.target.value });
  };

  return (
    <>
      <Select value={greet} onChange={handleGreetChange}>
        <MenuItem value={"hi"}>Hi</MenuItem>
        <MenuItem value={"hello"}>Hello</MenuItem>
      </Select>
      <Select value={name} onChange={handleNameChange}>
        <MenuItem value={"hery"}>Hery</MenuItem>
        <MenuItem value={"tom"}>Tom</MenuItem>
        <MenuItem value={"mk"}>Mk</MenuItem>
      </Select>
    </>
  );
};

export default Drop;
