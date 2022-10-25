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
  const initialState: any = { todos: [], newTitle: "" };
  const [application, setApplication] = createStore(initialState);

  createEffect(() => {
    setApplication({
      newTitle: "",
    });
  });
  createEffect(() => {
    console.log("ap", application.todos);
  }, [setApplication]);

  return (
    <div>
      <section>
        <div class="text-center">Create Application</div>
        <div class="flex justify-between">
          <h2>let's go discuss your task</h2>
          <p>talk about the project</p>
        </div>
        {/* <Form state={application} setState={setApplication} /> */}
        <form>
          <input
            placeholder="name"
            value={application.newTitle}
            onInput={(e) => setApplication({ newTitle: e.currentTarget.value })}
          />
          <button
            disabled={!application.newTitle.length}
            onClick={() =>
              setApplication({
                todos: [
                  ...application.todos,
                  {
                    name: application.newTitle,
                    user: application.newTitle,
                  },
                ],
                newTitle: "",
              })
            }
          >
            Add
          </button>
        </form>
        F
        <For each={application.todos}>
          {(todo, i) => (
            <div>
              <input
                value={todo.name || "please enter a title"}
                onChange={
                  (e) =>
                    setState("todos", i(), { title: e.currentTarget.value }) // <- Weird TS error. If anyone knows how to solve it please lmk.
                }
              />
              <input
                type="checkbox"
                checked={todo.title ? todo.done : false}
                onInput={(e) =>
                  setState("todos", i(), { done: e.currentTarget.value })
                }
              />
              <button
                onClick={() =>
                  setState("todos", (todo) => [
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
