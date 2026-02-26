import React, { useState } from "react";
import "../css/CannabisDestination.css";

import emailjs from "@emailjs/browser";
import { Spinner } from "react-bootstrap";
export default function ContactUs({

  
  bgScale = "58%",
  height = "100%",
  titleTop = "YOUR DESTINATION FOR",
  titleBottomLeft = "PREMIUM",
  titleBottomRight = "CANNABIS",
  description = `Step into a higher standard of cannabis. From carefully selected flower to refined concentrates and edibles, our menu is curated for those who appreciate quality, consistency, and variety. Whether you're unwinding after a long day or exploring something new, this is where premium lives.`,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
    const [messageNotification, setMessageNotification] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

 
    //Emailjs - send message.
  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_v9hywjc",
        "template_t89vvs7",
        e.target,
        "user_OcADP2ZtNbUvQnfGd1atQ"
      )
      .then(
        (result) => {
          setLoading(false);
          setMessageNotification("Message sent.");
        },
        (error) => {
          setLoading(false);
          setMessageNotification(
            "Error sending your message, please try again."
          );
        }
      );

    e.target.reset();
       setForm({name: "", email:"", message: ""})
  }

  return (
    <section
      className="contactUs"
      style={{
     
        "--ps-bg-scale": bgScale,
        "--ps-height": height,
      }}
      aria-label="Contact Us"
    >
      <div className="contactUs__overlay" />

      <div className="contactUs__inner">
        <div className="contactUs__card">
          <h2 className="contactUs__title">
            {titleTop} <br />
            {titleBottomLeft}{" "}
            <span className="contactUs__green">{titleBottomRight}</span>
          </h2>

          <p className="contactUs__desc">{description}</p>

          <h1 className="contactUs_Title">Contact Us</h1>

          <form className="contactUs__form" onSubmit={sendEmail}>
            <div className="contactUs__grid">
              <div className="contactUs__field">
                <label className="contactUs__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="contactUs__input"
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contactUs__field">
                <label className="contactUs__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="contactUs__input"
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@email.com"
                  required
                />
              </div>

        

              <div className="contactUs__field contactUs__field--full">
                <label className="contactUs__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="contactUs__textarea"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="What can we help with?"
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="contactUs__actions">
              <button className="contactUs__btn" type="submit">
                Send Message
              </button>
              {loading &&      <Spinner style={{ color: "#fff" }} animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
           
        <h2 className="messageNotification">{messageNotification}</h2>
              <p className="contactUs__fineprint">
                By submitting, you agree to be contacted back regarding your request.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}