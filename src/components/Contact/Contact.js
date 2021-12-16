import "./Contact.scss";
import Form from "../Form/Form";

function Contact() {
  return (
    <div className="contact">
      <Form />
      <div className="contact-img-container"></div>
      <img className="contact-img" src="/images/img-1.jpg"></img>
    </div>
  );
}

export default Contact;
