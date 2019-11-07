import React, { useContext, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ctx } from "./Wraper";

const Dest = () => {
  const [A, setA] = useState("hello");
  useEffect(() => {
    console.log("Call Dest effect" + Date.now() + A);
    const cleanUp = () => {
      console.log("clean");
    };

    return cleanUp;
  }, [A]);

  return <div>111111111</div>;
};

const Pics = () => {
  const { papers, greet, name } = useContext(ctx);

  useEffect(() => {
    document.title = `value ${papers}`;
  }, [papers]);

  let a = [];
  for (var i = 0; i < papers; i++) {
    a.push(
      <Paper key={i}>
        {greet} {name} {i}
      </Paper>
    );
  }

  return <>{papers !== 11 ? a : <Dest />}</>;
};

export default Pics;
