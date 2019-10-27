import React, { useState } from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

// 游戏
const Game = () => {
  const [numOfAnimals, setNumOfAnimals] = useState(100);
  const [whatThings, setWhatThings] = useState("🤡");
  const [numEachLine, setNumEachLine] = useState(10);
  function getCats(n, what) {
    if (n > 999) {
      n = 1000;
    }
    var cats = [];
    for (var i = 0; i < n; i++) {
      if (i !== 0 && i % numEachLine === 0) {
        cats.push(<br />);
      }
      cats.push(what);
    }
    const res = <div>{cats}</div>;
    return res;
  }

  const handleChange = e => {
    setNumOfAnimals(parseInt(e.target.value));
  };

  const handleThingsChange = e => {
    setWhatThings(e.target.value);
  };

  const handleNumEachLineChange = e => {
    setNumEachLine(parseInt(e.target.value));
  };

  return (
    <div className="game">
      <div className="game-board">{/* <Board /> */}</div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div>
        <Paper>{getCats(numOfAnimals, whatThings)}</Paper>
        <br />
        {/* <input
          type="number"
          value={numOfAnimals}
          onChange={handleChange}
        ></input> */}
        <TextField
          id="standard-number"
          label="你要多少个？"
          value={numOfAnimals}
          onChange={handleChange}
          type="number"
          //   className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="你要什么东西？"
          value={whatThings}
          onChange={handleThingsChange}
          //   type="number"
          //   className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="每行多少个？"
          value={numEachLine}
          onChange={handleNumEachLineChange}
          type="number"
          //   className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </div>
    </div>
  );
};

// =hd=======================================

ReactDOM.render(<Game />, document.getElementById("root"));
