import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";
import Layout from "./component/layout";
import Pages from "./Pages";
import GaponovAlexey from './person/GaponovAlexey.jsx'
const App: Component = () => {
  return (
    <>
      <Layout>
        <Pages />
      </Layout>
    </>
  );
};

export default App;
