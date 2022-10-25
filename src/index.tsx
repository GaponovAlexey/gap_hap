/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import "./assets/font/index.css";
import App from "./App";
import "../firebase.ts";
import { Provide } from "./context";

render(
  () => (
    <Provide>
      <Router>
        <App />
      </Router>
    </Provide>
  ),
  document.getElementById("root") as HTMLElement
);
