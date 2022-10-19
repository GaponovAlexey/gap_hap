import { Route, Routes } from "@solidjs/router";
import Main from "./component/Main";
import Landing from "./component/page/landing/Landing";
import Marketing from "./component/page/Marketing";
import Services from "./component/page/WebServices";

interface CounterData {
  count: number;
}
export const Pages = () => {
  const data = (): CounterData => {
    return { count: 4 };
  };
  return (
    <Routes>
      <Route path={"/"} element={Main} />
      <Route path={"/landing"} element={Landing} />
      <Route path={"/Services"} element={Services} />
      <Route path={"/Marketing"} element={Marketing} />
    </Routes>
  );
};

export default Pages;
