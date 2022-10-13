import { Route, Routes } from "@solidjs/router";
import Main from "./component/Main";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";

const Pages = () => {
  return (
    <Routes >
      <Route path={"/"} element={PageOne} />
      <Route path={"/two"} element={PageTwo} />
    </Routes>
  );
};

export default Pages;
