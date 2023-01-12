import React,{ useState } from "react";
import emailjs from '@emailjs/browser';
import Title from "../Title";

const Contact = () => {

  const [senderName, setSenderName] = useState("");
  const [organization, setOrganization] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = {
      senderName,
      organization,
      contactNumber,
      email,
      message
    };
  

    emailjs
      .send("service_2fuipi6","template_nmps1zw",{
        message: message,
        from_name: senderName,
        organization: organization,
        contact_number: contactNumber,
        from_email: email,
      },"hXvxs1kdiJie8ilJM")

      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thanks for contacting us! We will be in touch with you shortly."
          );
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="senderName"
              placeholder="name*"
              className="form-control"
              onChange={(e) => setSenderName(e.target.value)}
              required
            />{" "}
            <input
              className="form-control "
              placeholder="Your organization"
              name="organization"
              type="text"
              onChange={(e) => setOrganization(e.target.value)}
            />
            <input
              name="contactNumber"
              placeholder="your contact number"
              type="text"
              className="form-control"
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <input
              type="email"
              name="email_address"
              placeholder="email*"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message*"
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
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
