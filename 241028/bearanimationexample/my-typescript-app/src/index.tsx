import React from "react";
import ReactDOM from "react-dom/client";
// import { ThemeProvider } from "styled-components";
import App from "./App";

// const dark

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <ThemeProvider theme={}>
  <App />
  // </ThemeProvider>
);
