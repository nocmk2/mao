import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { ctx } from "./Wraper";

const Pics = () => {
  const { hhh, mmm, xxx } = useContext(ctx);
  return (
    <Paper>
      {xxx} hi hery {hhh}
    </Paper>
  );
};

export default Pics;
