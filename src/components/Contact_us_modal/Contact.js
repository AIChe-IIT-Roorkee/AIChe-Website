import React from "react";
import emailjs from "emailjs-com";
var receivingEmail = "aiche.iitr@gmail.com";

var user_id = process.env.REACT_APP_USER_ID;

var template_id = process.env.REACT_APP_TEMPLATE_ID;

var service_id = process.env.REACT_APP_SERVICE_ID;

emailjs.init(user_id);

var $ = window.$;
export default class Contact extends React.PureComponent {
    constructor(props) {
    super();
    this.state = {
      Name: "",
      Organization: "",
      Email: "",
      Phone: "",
      Message: "",
    };
  }
 sendMail(templateId, variables) {
    var flag = false;

    emailjs
      .send(service_id, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        alert("sent");
        flag = true;
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        alert("something went wrong, please try again");
      });
  }
  ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return input.match(validRegex);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    var isCorrectEmail = true;

    if (!this.ValidateEmail(this.state.Email)) {
      isCorrectEmail = false;
      alert("invalid email");
    }

    if (isCorrectEmail == true) {
      var templateId = template_id;
      var stateObj = this.state;
      var msgToSend = `Hii, Iam ${stateObj.Name} from ${stateObj.Organization} and Iam contacting you for ${stateObj.Message}, Here is my contact number ${stateObj.Phone}`;
      this.sendMail(templateId, {
        message: msgToSend,
        from_name: this.state.Email,
        to_name: receivingEmail,
      });
    }
  };
    handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
       <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form  onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                onChange={(event) => {
                        this.handleChange(event, "Name");

                      }}
                       required
              /> <input
                      onChange={(event) => {
                        this.handleChange(event, "Organization");
                      }}
                      className="form-control "
                      placeholder="Your organization"
                      
                      name="Organization"
                      type="text"
                     required
                    />
                    <input
                     onChange={(event) => {
                        this.handleChange(event, "Phone");
                      }}
                placeholder="your contact number"
                      type="text"
                className="form-control"
                
                     
                      required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                 onChange={(event) => {
                        this.handleChange(event, "Email");
                      }}
                      required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                onChange={(event) => {
                        this.handleChange(event, "Message");
                      }}
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
  }
}

