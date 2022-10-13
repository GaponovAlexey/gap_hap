import { Route, Routes } from "@solidjs/router";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";

const Pages = () => {
  const data = () => {return { count: 4 }}
  return (
    <Routes>
      <Route path={"/"} element={PageOne} />
      <Route path={"/two"} element={PageTwo} data={data} />
    </Routes>
  );
};

export default Pages;
