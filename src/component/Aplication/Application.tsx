import { createEffect, createSignal, For } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { Form } from "./Form";

// type Todo = {
//   name: string;
//   user: string;
// };

// type State = { todos: Todo[]; newTitle: string };
// type SetterAndGetter = [get: Store<State>, set: SetStoreFunction<State>];

const Application = () => {
  const initialState: any = { todos: [], name: "", user: "" };
  const [application, setApplication] = createStore(initialState);

  createEffect(() => {
    setApplication({
      name: "",
      user: "",
    });
    console.log("el", application.todos);
  });

  return (
    <div>
      <section>
        <div class="text-center">Create Application</div>
        <div class="flex justify-between">
          <h2>let's go discuss your task</h2>
          <p>talk about the project</p>
        </div>
        {/* ADD */}
        <Form application={application} setApplication={setApplication} />
        {/* VIE */}
        <For each={application.todos}>
          {(todo: any, i) => (
            <div>
              <input
                value={todo.name}
                onChange={(e) =>
                  setApplication("name", i(), {
                    name: e.currentTarget.value,
                  })
                }
              />
              <input
                value={todo.user}
                onInput={(e) =>
                  setApplication("user", i(), { user: e.currentTarget.value })
                }
              />
              <button
                onClick={() =>
                  setApplication("todos", (todo: any) => [
                    ...todo.slice(0, i()),
                    ...todo.slice(i() + 1),
                  ])
                }
              >
                Delete
              </button>
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default Application;
