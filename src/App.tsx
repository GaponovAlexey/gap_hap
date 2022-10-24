import { Component } from "solid-js";
import Layout from "./component/layout";
import { Provide } from "./context";
import Pages from "./Pages";

const App: Component = () => {
  return (
    <>
      <Provide>
        <Layout>
          <Pages />
        </Layout>
      </Provide>
    </>
  );
};

export default App;
