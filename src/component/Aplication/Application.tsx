import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { createEffect, createSignal } from "solid-js";
import { db } from "../../../firebase";
import s from "../../scss/main.module.scss";

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
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, { name: name });
  };
  //DELETE
  const deleteName = async (id: any) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  return (
    <div class={s.applications}>
      <div>
        {/* <For each={state()}>
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
        </For> */}
        <div class={s.text_logo} >
          <div class="text-2xl ">Create Application</div>
          <div>Fll out the form and we will contact you</div>
        </div>
        <form class={s.ap_form} onSubmit={add}>
          <div>
            <input
              type="text"
              placeholder="your name..."
              style='text-center'
              value={name()}
              onInput={(e: any) => setName(e.currentTarget.value)}
            />
            <input
              type="text"
              placeholder="mobile phone..."
              value={name()}
              onInput={(e: any) => setName(e.currentTarget.value)}
            />
          </div>
          <input
          class={s.ap_question}
            type="text"
            placeholder="your question..."
            value={name()}
            onInput={(e: any) => setName(e.currentTarget.value)}
          />
        </form>
      </div>
      <div class={s.application_img}></div>
    </div>
  );
};

export default Application;
