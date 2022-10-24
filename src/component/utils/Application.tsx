import { createEffect, createSignal, For, Show } from "solid-js";

type ApplicationType = {
  name: "string";
  user: "string";
};
const Application = () => {
  const [application, setApplication] = createSignal([
    { name: "111", user: "sda" },
  ]);

  const [name, setUser] = createSignal("da");
  const [user, setName] = createSignal("das");

  const addApplication = (e: any) => {
    e.preventDefault();
    const newData = { name: "222", user: "dsad" };
    setApplication((e) => e.concat(newData as ApplicationType));
  };

  return (
    <div>
      <section>
        <div class="text-center">Create Application</div>
        <div class="flex justify-between">
          <h2>let's go discuss your task</h2>
          <p>talk about the project</p>
        </div>
        <div class="text-black">
          <For each={application()}>{(ap: any) => <>{ap?.name}</>}</For>
        </div>
        <input
          type="text"
          placeholder="here"
          value={name()}
          onChange={(e: any) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="here"
          value={user()}
          onChange={(e: any) => setUser(e.target.value)}
        />
        <button onClick={addApplication}>add</button>
      </section>
    </div>
  );
};

export default Application;
