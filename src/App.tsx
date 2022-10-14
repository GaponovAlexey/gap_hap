import { Component } from "solid-js";
import Layout from "./component/layout";
import Main from "./component/Main";
import Pages from "./Pages";

const App: Component = () => {
  return (
    <>
      <Layout>
        <Main />
        <Pages />
      </Layout>
    </>
  );
};

export default App;
