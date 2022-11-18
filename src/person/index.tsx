import Gapon from "./Gapon";
import Viktoria from "./Vika";

const MainTeam = () => {
  return (
    <div class="bg-[#111111]" >
      <h1 class="text-center text-white text-3xl pt-14">Our Team</h1>
      <div class="flex justify-around">
        <Gapon />
        <Viktoria />
      </div>
    </div>
  );
};

export default MainTeam;
