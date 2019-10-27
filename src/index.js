import React, { useState } from "react";
import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "./index.css";

// // 方块
// class Square extends React.Component {
//   render() {
//     return <button className="square">✈️{/* TODO */}</button>;
//   }
// }

// // 棋盘
// class Board extends React.Component {
//   // 函数
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// 游戏
const Game = () => {
  const [numOfAnimals, setNumOfAnimals] = useState(10);
  const [whatThings, setWhatThings] = useState("🤡");
  function getCats(n, what) {
    if (n > 999) {
      n = 1000;
    }
    var cats = [];
    for (var i = 0; i < n; i++) {
      if (i !== 0 && i % 10 === 0) {
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
      </div>
    </div>
  );
};

// =hd=======================================

ReactDOM.render(<Game />, document.getElementById("root"));
