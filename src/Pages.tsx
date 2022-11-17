import { Route, Routes } from "@solidjs/router";
import Login from "./component/client";
import SignIn from "./component/client/SignIn";
import SignUp from "./component/client/SignUp";
import Main from "./component/Main";
import Marketing from "./component/page/Marketing";
import Services from "./component/page/WebServices";
import Gapon from "./person/Gapon";

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
      <Route path={"/Services"} element={Services} />
      <Route path={"/Marketing"} element={Marketing} />
      <Route path={"/GaponovAlexey"} element={Gapon} />
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
  );
};

export default Pages;
