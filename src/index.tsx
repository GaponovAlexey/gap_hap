/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router"
import "./index.css"
import "./assets/font/index.css"
import App from "./App"
import "../firebase.ts"

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement,
)
