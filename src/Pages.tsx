import { Route, Routes } from "@solidjs/router"
import Main from "./component/Main"
import Gapon from "./person/Gapon"

export const Pages = () => {
  return (
    <Routes>
      <Route path={"/"} element={Main} />
      {/* <Route path={"/team"} element={MainTeam} /> */}
      <Route path={"/GaponovAlexey"} element={Gapon} />
    </Routes>
  )
}

export default Pages
