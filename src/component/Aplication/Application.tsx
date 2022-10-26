import { createResource, createSignal, For, Show } from "solid-js";
import { Form } from "./Form";
import { createStore } from "solid-js/store";

type Todo = {
  name: string;
  user: string;
};

type State = { todos: Todo[]; name: string; user: string };
// type SetterAndGetter = [get: Store<State>, set: SetStoreFunction<State>];

const fetchUser: any = async (name: string) =>
  (await fetch(`https://jsonplaceholder.typicode.com/todos/1`)).json();

const Application = () => {
  const [application, setApplication] = createStore({
    todos: [],
    name: "",
    user: "",
  });
  const [data, { mutate, refetch }] = createResource(fetchUser);

  //fetch
  return (
    <div>
     <Show when={data}>{<div>{data()}</div>}</Show> 
      <section>
        <input
          type="text"
          placeholder="Enter Numeric Id"
        />
        <span>{data.loading && "Loading..."}</span>
      </section>
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
              <div class="flex px-12">
                <div>{todo.name}</div>
                <div>{todo.user}</div>
              </div>
              {/* <button
                onClick={() =>
                  setApplication("todos", (ap: any) => [
                    ...ap.slice(0, i()),
                    ...ap.slice(i() + 1),
                  ])
                }
              >
                Delete
              </button> */}
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default Application;
