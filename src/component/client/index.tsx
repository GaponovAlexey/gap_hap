import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import SignUp from "./SignUp";
const Login = () => {
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(console.error);
  };
  return (
    <div>
      <SignUp handleRegister={handleRegister} />
    </div>
  );
};

export default Login;
