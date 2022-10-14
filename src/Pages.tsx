import { Route, Routes } from "@solidjs/router";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";

interface CounterData {
  count: number
}
export const Pages = () => {
  const data = (): CounterData => {
    return { count: 4 };
  };
  return (
    <Routes>
      <Route path={"/"} element={PageOne} />
      <Route path={"/two"} element={PageTwo} data={data} />
    </Routes>
  );
};

export default Pages;