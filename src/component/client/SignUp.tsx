import { useNavigate } from "@solidjs/router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setCookie } from "nookies";
import { createSignal } from "solid-js";
import { useContextUser } from "../../context";

const SignUp = () => {
  const nav = useNavigate();
  const [_, { sigIn }] = useContextUser() as any;
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }: any) => {
        console.log(user);
        setCookie(null, "token", user.accessToken, {});
        setCookie(null, "email", user.email, {});
        nav("/");
        sigIn()
      })
      .catch(console.error);
  };

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const SendData = () => {
    if (password().length > 5 && email().length > 5) {
      handleRegister(email(), password());
    }
  };

  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class=" px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p class="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                pattern=".+@globex\.com"
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="Password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
                type="text"
                id="Password"
                name="Password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={SendData}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
