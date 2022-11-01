import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getDocsFromCache,
  updateDoc,
} from "firebase/firestore";
import { Input } from "postcss";
import { createEffect, createSignal, For, Suspense } from "solid-js";
import { createStore } from "solid-js/store";
import { db } from "../../../firebase";

const Application = () => {
  const [state, setState] = createSignal<any>();
  const usersColRef = collection(db, "users");
  const [name, setName] = createSignal<any>("");

  //GET
  createEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColRef);
      setState(data.docs.map((e: any) => ({ ...e.data(), id: e.id })));
    };
    getUsers();
  }, [setState]);

  //POST
  const add = async (e: any) => {
    e.preventDefault();
    await addDoc(usersColRef, { name: name() });
    setName("");
  };
  
  //PUT
  const update = async (name: any, id: any) => {
    const userDoc = doc(db, "users", id)
    await updateDoc(userDoc, { name: name })
  };
  //DELETE 
  const deleteName = async (id: any) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  return (
    <div>
      <For each={state()}>
        {(e: any) => (
          <div class="text-center">
            {e.name}
            <span>
              <button onClick={() => update(name(), e.id)} style="color: red">
                update
              </button>
              <button
                onClick={() => deleteName(e.id)}
                style="color: red; padding-left: 10px"
              >
                del
              </button>
            </span>
          </div>
        )}
      </For>
      <section>
        <div class="text-center">Create Application</div>
        <div class="flex justify-between">
          <h2>let's go discuss your task</h2>
          <p>talk about the project</p>
        </div>
        <form onSubmit={add}>
          <input
            type="name"
            placeholder="name"
            value={name()}
            onInput={(e: any) => setName(e.currentTarget.value)}
          />
          {name()}
        </form>
      </section>
    </div>
  );
};

export default Application;
