import { createSignal, For } from "solid-js";
import { createLocalStore } from "../../context/localStorage";

type ApplicationType = {
  name: "string";
  user: "string";
};
const Application = () => {
  const [application, setApplication] = createLocalStore([]);
  const [user, setUser] = createSignal({ name: "", email: "" });

  const addApplication = (e: any) => {
    e.preventDefault();
    setApplication({
      user: user()?.name,
      email: user()?.email,
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
          <form onSubmit={addApplication}>
            <input
              placeholder="user"
              value={user().name}
              onInput={(e: any) => setUser(e.currentTarget.value)}
            />
            <input
              placeholder="name"
              value={user().email}
              onInput={(e: any) => setUser(e.currentTarget.value)}
            />
            <button>+</button>
          </form>
        </div>
        {/* <For each={application}>
          {(application: ApplicationType, i) => (
            <>
              <input
                type="text"
                placeholder="name"
                value={application.name}
                onInput={(e: any) =>
                  setApplication(i(), "name", e.currentTarget.value)
                }
              />
              <input
                type="text"
                placeholder="user"
                value={application.user}
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
        </For> */}
      </section>
    </div>
  );
};

export default Application;
