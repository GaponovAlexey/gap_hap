import { useNavigate } from "@solidjs/router";

function Burger({ children, open, setIsOpen }: any) {
  const nav = useNavigate();
  return (
    <div
      class={
        "fixed overflow-hidden delay-1000 pt-5 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (open
          ? "transition-opacity delay-1000 opacity-100 duration-500 translate-x-0"
          : "transition-all delay-1000 opacity-0 translate-x-full")
      }
    >
      <section
        class={
          "w-screen max-w-lg right-0 delay-1000 pt-5 absolute bg-white h-full shadow-xl delay-400 duration-500 transform  " +
          (open ? "translate-x-0 delay-1000" : "translate-x-full delay-1000")
        }
      >
        {/* ico */}
        <div
          onClick={() => setIsOpen(false)}
          class={`${open && "open text-left "}`}
          id="nav-icon1"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* ico */}
        <article class="relative w-screen delay-1000 max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        class=" w-screen h-full delay-1000 cursor-pointer "
        onClick={() => setIsOpen(false)}
      ></section>
    </div>
  );
}

export default Burger;
