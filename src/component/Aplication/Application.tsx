import { createResource, createSignal, For } from "solid-js";
import { Form } from "./Form";
import { createStore } from "solid-js/store";

type Todo = {
  name: string;
  user: string;
};

type State = { todos: Todo[]; name: string; user: string };
// type SetterAndGetter = [get: Store<State>, set: SetStoreFunction<State>];

const fetchUser: any = async (name: string) =>
  (
    await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)
  ).json();

const Application = () => {
  const [application, setApplication] = createStore({
    todos: [],
    name: "",
    user: "",
  });

  //fetch
  const [userName, setUserName] = createSignal(),
    [user] = createResource(userName, fetchUser);

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Enter Numeric Id"
          onInput={(e) => setUserName(e.currentTarget.value)}
        />
        <span>{user.loading && "Loading..."}</span>
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
