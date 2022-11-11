import { A, useNavigate } from "@solidjs/router";

function Burger({ children, open, setIsOpen }: any) {
  const nav = useNavigate();
  return (
    <div
      class={
        "fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (open
          ? "transition-opacity  opacity-100 duration-500 translate-x-0"
          : "transition-all  opacity-0 translate-x-full")
      }
    >
      <section
        class={
          "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl duration-500 transform" +
          (open ? "translate-x-0 " : "translate-x-full ")
        }
      >
        {/* ico */}
        <div class="" onClick={() => setIsOpen(false)} id="nav-icon1">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="#000"
            class="w-12 h-12 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          
        </div>
        {/* ico */}
        <article
          onClick={() => setIsOpen(false)}
          class="relative w-screen text-right px-10 text-3xl pt-5 max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full"
        >
          {/* {children} */}
          <A href="/">Home</A>
          <A href="/landing">landing</A>
          <A href="/Services">Services</A>
          <A href="/Marketing">Marketing</A>
        </article>
      </section>
      <section
        class=" w-screen h-full cursor-pointer "
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
}

export default Burger;
