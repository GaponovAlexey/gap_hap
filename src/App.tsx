import { Component } from "solid-js";
import Layout from "./component/layout";
import Pages from "./Pages";
const App: Component = () => {
  return (
    <>
    <h1>Developer company</h1>
      <Layout>
        <Pages />
      </Layout>
    </>
  );
};

export default App;
