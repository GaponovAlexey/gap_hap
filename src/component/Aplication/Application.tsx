import { createResource, createSignal, For, Show, Suspense } from "solid-js";
import { Form } from "./Form";
import { createStore } from "solid-js/store";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const fetchUser: any = async (name: string) =>
  (await fetch(`https://jsonplaceholder.typicode.com/todos/1`)).json();

const Application = () => {
  const [state, setSta] = createStore();

  const getUsers = async () => {
    const usersColRef = collection(db, "users");
    const data = await getDocs(usersColRef);
    setSta(data.docs.map((e: any) => ({ ...e.data(), id: e.id })));
    console.log(
      "data2",
      data.docs.map((e: any) => ({ ...e.data(), id: e.id }))
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
      <Suspense fallback={<div>not</div>}>
        <div>{state[0]?.name}</div>
        {/* {state?.map((el: any) => { */}
          {/* return <>{el?.name}</>; */}
        {/* })} */}
      </Suspense>
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
