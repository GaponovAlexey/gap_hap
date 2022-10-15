import { A } from "@solidjs/router";

function Burger() {
  return (
    <div class="dropdown">
    <button tabIndex="0" class="btn m-1">Click</button>
    <ul tabIndex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  );
}

export default Burger;
