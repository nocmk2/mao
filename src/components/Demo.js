import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Box from "@material-ui/core/Box";
import { spacing, palette, borders } from "@material-ui/system";

const Ti = styled.div`${spacing}${palette}${borders}`;

const theme = {
  spacing: 90,
  palette: {
    primary: "#007bff"
  }
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* children ddd*/}
        <Ti p={1} border={3} borderColor="primary" color="primary">
          4px
        </Ti>
        {/* <Box p={1} border={10} borderColor="blue" color="pinks">
          fef
        </Box> */}
        <Box p={3} color="white" bgcolor="black" fontSize={100}></Box>
      </ThemeProvider>
    </>
  );
}
