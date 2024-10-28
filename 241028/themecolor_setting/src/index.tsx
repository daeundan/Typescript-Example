import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme"; // 테마 임포트
import App1 from "./App1";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={darkTheme}>
    <App1 />
  </ThemeProvider>
);
