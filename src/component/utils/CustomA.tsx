import { A } from "@solidjs/router";

const CustomA = ({ name, path }: { name: string; path: string }) => {
  return (
    <A
      class="group z-0 relative inline-block overflow-hidden border sm:bg-yellow-300 border-yellow-600 px-2 py-3 focus:outline-none focus:ring"
      href={`${path}`}
    >
      <div class="absolute block inset-y-0 left-0 w-[2px] bg-yellow-600 transition-all group-hover:w-full  group-active:bg-yellow-600"></div>
      <div class="relative block text-sm font-medium text-black transition-colors  group-hover:text-white">
        {name}
      </div>
    </A>
  );
};

export default CustomA;
