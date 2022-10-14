import { Route, Routes } from "@solidjs/router";
import About from "./component/page/About";
import Lending from "./component/page/Lending";
import Marketing from "./component/page/Marketing";
import Services from "./component/page/Services";
import PageOne from "./component/PageOne";
import PageTwo from "./component/PageTwo";

interface CounterData {
  count: number;
}
export const Pages = () => {
  const data = (): CounterData => {
    return { count: 4 };
  };
  return (
    <Routes>
      <Route path={"/"} element={PageOne} />
      <Route path={"/lending"} element={Lending} />
      <Route path={"/Services"} element={Services} />
      <Route path={"/Marketing"} element={Marketing} />
      <Route path={"/about"} element={About} />
    </Routes>
  );
};

export default Pages;
