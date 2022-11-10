import { Route, Routes } from "@solidjs/router";
import Main from "./component/Main";
import Landing from "./component/page/landing/Landing";
import Marketing from "./component/page/Marketing";
import Services from "./component/page/WebServices";
import Login from "./component/client";
import SignUp from "./component/client/SignUp";
import SignIn from "./component/client/SignIn";
import { ErrorBoundary } from "solid-js";

interface CounterData {
  count: number;
}
export const Pages = () => {
  const data = (): CounterData => {
    return { count: 4 };
  };
  return (
    <ErrorBoundary fallback={<Route path={"/"} element={Main} />}>
      <Routes>
        <Route path={"/"} element={Main} />
        <Route path={"/landing"} element={Landing} />
        <Route path={"/Services"} element={Services} />
        <Route path={"/Marketing"} element={Marketing} />
        <Route
          path={"/login"}
          element={
            <Login>
              <SignIn />
            </Login>
          }
        />
        <Route
          path={"/register"}
          element={
            <Login>
              <SignUp />
            </Login>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
};

export default Pages;
