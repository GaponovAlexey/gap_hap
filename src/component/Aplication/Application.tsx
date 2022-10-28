import { collection, getDocs, getDocsFromCache } from "firebase/firestore";
import { createSignal, For, Suspense } from "solid-js";
import { createStore } from "solid-js/store";
import { db } from "../../../firebase";

const Application = () => {
  const [state, setState] = createSignal<any>();

  const getUsers = async () => {
    const usersColRef = collection(db, "users");
    const data = await getDocs(usersColRef);
    setState(data.docs.map((e: any) => ({ ...e.data(), id: e.id })));
    console.log(
      "da",
      data.docs.map((e: any) => ({ ...e.data() }))
    );
  };
  getUsers();

  //db
  // const [application, setApplication] = createStore({
  //   todos: [],
  //   name: "",
  //   user: "",
  // });
  // const [data, { mutate, refetch }] = createResource(fetchUser);

  //fetch
  return (
    <div>
      <For each={state()}>{(e: any) => <>{e.name}</>}</For>
      <section>
        <div class="text-center">Create Application</div>
        <div class="flex justify-between">
          <h2>let's go discuss your task</h2>
          <p>talk about the project</p>
        </div>
      </section>
    </div>
  );
};

export default Application;
