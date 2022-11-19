const CustomBut = ({ name }: { name: string }) => {
  return (
    <div class="group z-2 relative inline-block overflow-hidden text-center cursor-pointer focus:border-[#111111] focus:ring-2 focus:ring-indigo-200 px-2 py-3 focus:outline-none ">
      <div class="absolute block inset-y-0 left-0 w-[1px]  rounded-sm bg-[#111111] transition-all group-hover:w-full  group-active:bg-indigo-500"></div>
      <div class="relative block text-sm font-medium mx-10 text-black transition-colors  group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default CustomBut;
