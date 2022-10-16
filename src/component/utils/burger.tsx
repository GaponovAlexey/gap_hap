function Burger({ children, open, setIsOpen }: any) {
  return (
    <div
      class={
        " fixed overflow-hidden pt-5 z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (open
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        class={
          " w-screen max-w-lg right-0 pt-5 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (open ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <button onClick={() => setIsOpen(false)} class=" text-black">
          close
        </button>
        <article class="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header class="p-4 pt-5 font-bold text-lg">Header</header>
          {children}
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