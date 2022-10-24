import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import SignUp from "./SignUp";
import { setCookie, parseCookies } from "nookies";
import SignIn from "./SignIn";
import { useNavigate } from "@solidjs/router";

const Login = ({ children }: any) => {
  const t = parseCookies();
  console.log("em", t.email);
  const location = useNavigate();
  console.log("location", location);

  if (!t.email) {
    return children;
  }

  return location("/");
};

export default Login;
