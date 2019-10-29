import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";
// import Capsule from "./components/Capsule";
import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
import Box from "./components/Box";
import Demo from "./components/Demo";

const Big = () => {
  return (
    <>
      <Box
        // textAlign={{ xs: "right", md: "center" }}
        color="text.primary"
        bgcolor="secondary.main"
        m={0} // margin
        // p={0}
        clone
      >
        <Button>111</Button>
        {/* <Button>222</Button> */}
      </Box>

      <Box
        // textAlign={{ xs: "right", md: "center" }}
        color="text.primary"
        bgcolor="secondary.main"
        m={2} // margin
        clone
      >
        <Button>222</Button>
        {/* <Button>222</Button> */}
      </Box>
      <Demo></Demo>
    </>
  );
};

ReactDOM.render(<Big />, document.getElementById("root"));
