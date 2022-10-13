import { A } from "@solidjs/router";

const Main = () => {
  return (
    <>
      <div class="text-3xl font-bold underline bg-blue-200 flex justify-center">
        start
      </div>
      <div class="flex justify-around text-blue-700">
        <A href="/">one</A>
        <A href="/two">two</A>
      </div>
    </>
  );
};

export default Main;
