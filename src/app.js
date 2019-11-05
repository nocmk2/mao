import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer
} from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import EmojoAPI from "./apis/EmojoAPI";
// import Speech from "react-speech";
// import Say from "./components/Say";
import PropTypes from "prop-types";
import SpeechRecongnition from "react-speech-recognition";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CountContext = createContext();

const Index = () => {
  useEffect(() => {
    console.log("Index in");
    return () => {
      console.log("Index out");
    };
  }, []);
  return <h2>Main</h2>;
};

const List = () => {
  let c = useContext(CountContext);
  return <h2>List{c}</h2>;
};

// 游戏
const App = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  const [numOfAnimals, setNumOfAnimals] = useState(100);
  const [whatThings, setWhatThings] = useState("");
  const [numEachLine, setNumEachLine] = useState(10);
  // var ai = setInterval(resetTranscript, 5000);

  useEffect(() => {
    var num = transcript.replace(/[^0-9]/gi, "");
    if (parseInt(num)) {
      setNumOfAnimals(parseInt(num));
    }

    var emojName = EmojoAPI.getEmojoNameBySearch(transcript);
    if (emojName) {
      setWhatThings(emojName);
      console.log(emojName);
      resetTranscript();
    }
    if (transcript.length > 14 || transcript.includes("重")) {
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  if (!browserSupportsSpeechRecognition) {
    console.log("not support1111111111");
    return null;
  }
  // const propTypes = {
  //   // Props injected by SpeechRecognition
  //   transcript: PropTypes.string,
  //   resetTranscript: PropTypes.func,
  //   browserSupportsSpeechRecognition: PropTypes.bool
  // };

  function getCats(n, what) {
    if (n > 999) {
      n = 1000;
    }
    var cats = [];
    for (var i = 0; i < n; i++) {
      if (i !== 0 && i % numEachLine === 0) {
        cats.push(<br key={i} />);
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
    console.log("handleThingsChange");
    setWhatThings(e.target.value);
  };

  const handleNumEachLineChange = e => {
    setNumEachLine(parseInt(e.target.value));
  };

  function ReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
      switch (action) {
        case "add":
          return state + 1;
        case "sub":
          return state - 1;
        default:
          return state;
      }
    }, 0);

    return (
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            dispatch("add");
          }}
        >
          Incr
        </button>
        <button
          onClick={() => {
            dispatch("sub");
          }}
        >
          Decr
        </button>
      </div>
    );
  }

  return (
    <div className="game">
      <div className="game-board">{/* <Board /> */}</div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
      <div>
        <Paper>
          {getCats(numOfAnimals, EmojoAPI.getEmojoByWords(whatThings))}
        </Paper>
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
        <Paper>{transcript}</Paper>
      </div>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
      <CountContext.Provider value={numOfAnimals}>
        <List></List>
      </CountContext.Provider>
      <ReducerDemo></ReducerDemo>
    </div>
  );
};

// App.propTypes = propTypes;
const options = {
  autoStart: true,
  recognition: "zh-CN"
};
// =hd=======================================
export default SpeechRecongnition(options)(App);
