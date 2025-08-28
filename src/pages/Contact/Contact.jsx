import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

emailjs.sendForm(
  "service_d0mnj3n",       // 👈 Service ID (اللي انت عاملها مع Gmail)
  "template_gxxnpoq",       // 👈 Template ID (من Email Templates)
  form.current,
  "tF46xe8btA2GaOCyp"      // 👈 Public Key (اللي انت جبته)
)
.then(
  () => {
    alert("Message sent ✅");
  },
  (error) => {
    alert("Failed to send message ❌, please try again.");
    console.error("EmailJS Error:", error);
  }
);

  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          Feel free to reach out to me using the form below or via my contact
          information.
        </p>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Email: <a href="mailto:mahmoudkhayal81@gmail.com">mahmoudkhayal81@gmail.com</a></p>
            <p>Phone: +20 155 296 5955</p>
            <p>Location: Cairo, Egypt</p>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
