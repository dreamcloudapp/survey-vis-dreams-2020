import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DreamTheme } from "./data/dummy-data";

declare global {
  interface Window {
    embedBubbleNav: Function;
  }
}

export type Theme = {
  primaryColor: string;
};

export type BubbleNavOpts = {
  data?: DreamTheme[];
  darkMode?: boolean;
};

window.embedBubbleNav = function (
  elementId: keyof HTMLElementTagNameMap,
  opts: BubbleNavOpts = {}
) {
  // const params = qs.parse(window.location.search.slice(1));
  const { data, darkMode } = opts;

  const el = document.querySelector(elementId);
  const render = () =>
    ReactDOM.render(
      <React.StrictMode>
        <App data={data} darkMode={darkMode} />
      </React.StrictMode>,
      el
    );
  render();
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
