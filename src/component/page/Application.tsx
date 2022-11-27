import {
  addDoc,
  collection
} from "firebase/firestore";
import { createSignal } from "solid-js";
import { db } from "../../../firebase";
import s from "../../scss/main.module.scss";
import CustomBut from "../utils/CustomBut";

const Application = () => {
  const usersColRef = collection(db, "users");
  const [name, setName] = createSignal<string>("");
  const [numbers, setNumber] = createSignal<any | null>(null);
  const [message, setMessage] = createSignal<string>("");
  
  //POST
  const add = async (e: any) => {
    e.preventDefault();
    await addDoc(usersColRef, {
      name: name(),
      number: numbers(),
      message: message(),
    });
    setName("");
    setNumber(null);
    setMessage("");
  };



  return (
    <div id="application" class={s.applications}>
      <div>
        <div class={s.text_logo}>
          <h2>Create Application</h2>
          <div>Fll out the form and we will contact you</div>
        </div>
        <form class={s.ap_form} onSubmit={add}>
          <div>
            <input
              type="text"
              placeholder="name..."
              style="text-center"
              required
              value={name()}
              onInput={(e: any) => setName(e.currentTarget.value)}
            />
            <input
              type="tel"
              required
              placeholder="mobile phone..."
              value={numbers()}
              onInput={(e: any) => setNumber(e.currentTarget.value)}
            />
          </div>
          <input
            class={s.ap_question}
            type="text"
            required
            placeholder="your question..."
            value={message()}
            onInput={(e: any) => setMessage(e.currentTarget.value)}
          />
          <input
            class={s.ap_checkbox}
            type="checkbox"
            placeholder=""
            name="da"
          />
          <span class="sl:text-sm">
            "I have read and agree to the Privacy Policy
          </span>
          <br />
          <button onClick={add}  >
            <CustomBut name="send application" />
          </button>
        </form>
      </div>
      <div class={s.application_img}></div>
    </div>
  );
};

export default Application;
