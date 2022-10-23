import { Component } from "solid-js";
import Layout from "./component/layout";
import Main from "./component/Main";
import Pages from "./Pages";

const App: Component = () => {
  // console.log("env", import.meta.env.VITE_FIREBASE_API_KEY);

  return (
    <>
      <Layout>
        <Pages />
      </Layout>
    </>
  );
};

export default App;
