import { createSignal, For } from "solid-js";
import { createLocalStore } from "../../context/localStorage";

type ApplicationType = {
  name: "string";
  user: "string";
};
const Application = () => {
  const [application, setApplication] = createLocalStore([]);
  const [name, setUser] = createSignal("");
  const [user, setName] = createSignal("");

  const addApplication = (e: any) => {
    e.preventDefault();
    setApplication(application.length, {
      name: name(),
      user: user(),
    });
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
          <For each={application()}>
            {(ap: any) => (
              <>
                <div> name:{ap?.name}</div>
                <div> user:{ap?.user}</div>
              </>
            )}
          </For>
        </div>
        <For each={application}>
          {(application, i) => (
            <>
              <input
                type="text"
                placeholder="name"
                value={name()}
                onInput={(e: any) =>
                  setApplication(i(), "name", e.currentTarget.value)
                }
              />
              <input
                type="text"
                placeholder="user"
                value={user()}
                onInput={(e: any) =>
                  setApplication(i(), "user", e.currentTarget.value)
                }
              />
              <button
                onClick={() =>
                  setApplication((t: any) => [
                    ...t.slice(0, i()),
                    ...t.slice(i() + 1),
                  ])
                }
              >
                add
              </button>
            </>
          )}
        </For>
      </section>
    </div>
  );
};

export default Application;
