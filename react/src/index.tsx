import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render();
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./App", () => {
    render();
  });
}
