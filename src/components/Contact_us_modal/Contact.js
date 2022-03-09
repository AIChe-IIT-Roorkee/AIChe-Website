import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Title from "../Title";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_3u82gxo",
        "template_s9jkf5b",
        form.current,
        "fwpp4k-kljuwfDYiq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact-page">
      <article className="contact-form">
        <Title title="get in touch" />
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="name*"
              className="form-control"
              required
            />{" "}
            <input
              className="form-control "
              placeholder="Your organization"
              name="organization"
              type="text"
            />
            <input
              name="phone_number"
              placeholder="your contact number"
              type="text"
              className="form-control"
            />
            <input
              type="email"
              name="email_address"
              placeholder="email*"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message*"
              className="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            submit here
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
