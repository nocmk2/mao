import React, { useState, useMemo } from "react";
import Controls from "./Controls";
import Drop from "./Drop";
import Pics from "./Pics";
import { Wraper } from "./Wraper";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const Sentence = () => {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Input value={val} onChange={event => setVal(event.target.value)} />
      <h4>
        {count}-{val}-{expensive}
      </h4>
      <Wraper>
        <Controls></Controls>
        <Drop></Drop>
        <Pics></Pics>
      </Wraper>
    </div>
  );
};

export default Sentence;
