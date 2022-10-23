import { Component } from "solid-js";
import Layout from "./component/layout";
import Main from "./component/Main";
import { db } from "./firebase";
import Pages from "./Pages";

const App: Component = () => {
  // console.log("env", import.meta.env.VITE_FIREBASE_API_KEY);
  const da = db.app('ad')
  return (
    <>
      <Layout>
        <div>dsa</div>
        <Pages />
      </Layout>
    </>
  );
};

export default App;
