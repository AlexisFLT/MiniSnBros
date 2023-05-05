import { useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from "@emailjs/browser";
import Navbar from "@components/Navbar/Navbar";
import "./style.scss";

export default function Contact() {
  const form = useRef();
  const sendMessRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_ID
      )
      .then(
        (result) => {
          console.error(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const messageValidate = () => {
    sendMessRef.current.style.display = "unset";
    document.form.reset();
  };

  return (
    <div className="contactPage">
      <Navbar />
      <div className="contactForm">
        <p className="catchphraseContact">
          Une question, demande ou un simple petit message ? <br /> C'est par
          ici !
        </p>
        <form ref={form} onSubmit={sendEmail} className="formBlock">
          <label htmlFor="name" className="labelName">
            Nom
          </label>
          <input
            className="inputText"
            type="text"
            name="name"
            required
            autoComplete="off"
          />
          <label className="labelName" htmlFor="email">
            Email
          </label>
          <input
            className="inputText"
            type="email"
            name="email"
            required
            autoComplete="off"
          />
          <label className="labelName" htmlFor="message">
            Message
          </label>
          <textarea
            className="inputText textareaInput"
            name="message"
            rows={8}
            required
            autoComplete="off"
          />
          <button
            className="sendButton"
            type="submit"
            onClick={messageValidate}
          >
            Envoyer
          </button>
          <p className="messageSend" ref={sendMessRef}>
            Votre message a bien été envoyé
          </p>
        </form>
      </div>
    </div>
  );
}
