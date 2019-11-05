import React, { Component } from "react";
import Controls from "./Controls";
import Pics from "./Pics";
import { Wraper } from "./Wraper";

const Sentence = () => {
  return (
    <div>
      <Wraper>
        <Controls></Controls>
        <Pics></Pics>
      </Wraper>
    </div>
  );
};

export default Sentence;
