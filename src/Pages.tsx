import { Route, Routes } from "@solidjs/router";
import Login from "./component/client";
import SignIn from "./component/client/SignIn";
import SignUp from "./component/client/SignUp";
import Main from "./component/Main";
import Marketing from "./component/page/Marketing";
import MainTeam from "./person";
import Gapon from "./person/Gapon";


export const Pages = () => {
  
  return (
    <Routes>
      <Route path={"/"} element={Main} />
      <Route path={"/Marketing"} element={Marketing} />
      <Route path={"/team"} element={MainTeam} />
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
