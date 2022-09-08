import Image from "next/image";

import React, { useRef } from "react";
import { useState } from "react";

import styles from "../styles/Contact.module.css";
const ContactBody = () => {
  const [sent, setSent] = useState(false);
  const success = () => {
    setSent((sent = true));

    setTimeout(() => {
      setSent((sent = false));
    }, 2000);
  };

  return (
    <div className={styles.contactbody}>
      <div className={styles.contactbodychildone}></div>
      <div className={styles.contactbodychildtwo}>
        <div className={styles.contactbodychildtwoinnerone}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7524.336256348019!2d29.8630049!3d-19.4483167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1934955ea8180a1d%3A0xe987a1c41c4f7e35!2sLingfield%20Christian%20Academy!5e0!3m2!1sen!2szw!4v1655101194812!5m2!1sen!2szw"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            height={1180}
            width={400}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.contactbodychildtwoinnertwo}>
          <div className={styles.contactrequired}>
            <h5>* Required</h5>
          </div>
          {(() => {
            if (sent == true) {
              return (
                <div>
                  <h2 style={{ color: "green" }}>Message Sent !!!!</h2>
                </div>
              );
            }
          })()}

          <form className={styles.formcontrol}>
            <h2>Contact Form </h2>
            <label htmlFor="">
              Title <br /> Mr/Ms/Mrs/Dr
            </label>
            <br />

            <div className={styles.formgroup}>
              <input
                type="text"
                className={styles.forminput}
                name="title"
                required
              />
            </div>

            <div className={styles.pairedinputs}>
              <div>
                <label htmlFor="">First Name</label> <br />
                <input
                  type="text"
                  className={styles.forminput}
                  name="firstname"
                  required
                />
              </div>

              <div>
                <label htmlFor="">Last Name</label> <br />
                <input
                  type="text"
                  className={styles.forminput}
                  name="lastname"
                  required
                />
              </div>
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="">Email</label> <br />
              <input
                type="text"
                className={styles.forminput}
                name="email"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="">Telephone number</label> <br />
              <input
                type="text"
                className={styles.forminput}
                name="phonenumber"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="">Your message</label> <br />
              <textarea
                name="message"
                id=""
                cols="80"
                rows="10"
                className={styles.forminput}
                required
              ></textarea>
            </div>

            <div className="consent-forms">
              <label>
                Would you like to be added to our contact list? <br />
                Please confirm if you are happy to receive occasional emails
                from to update you about news &amp; events
              </label>{" "}
              <br />
              <div className={styles.consetinput}>
                <input type="radio" value="Yes" /> Yes
                <input type="radio" value="No" /> No
              </div>
            </div>

            <div className="consent-forms">
              <label className="label-required">
                Your personal information*
              </label>
              <br />
              <label>
                Please confirm that you are happy with us retaining your
                personal information in order to feal with you enquiry.This box
                must be ticked to submit.
              </label>
              <br />
              <div className={styles.consetinput}>
                <input type="checkbox" /> Yes I provide my consent for you to
                hold my details as provided.
              </div>
            </div>
            {(() => {
              if (sent == true) {
                return (
                  <div>
                    <h2 style={{ color: "green" }}>Message Sent !!!!</h2>
                  </div>
                );
              }
            })()}
            <div className={styles.btnContainer}>
              <button className={styles.btnPrimary} onClick={success}>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
