import { useNavigate } from "@solidjs/router";
import { parseCookies } from "nookies";

const Login = ({ children }: any) => {
  const t = parseCookies();
  console.log("em", t.email);
  const location = useNavigate();

  if (!t.email) {
    return children;
  }

  return location("/");
};

export default Login;
