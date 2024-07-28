import React, { useState, useRef } from "react";
import { CONTACT } from "../constants";
import "../index.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY // Ensure this is correct
      )
      .then(
        () => {
          toast.success("Email sent successfully");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Internal Server Error");
        }
      );
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20">
        <div className="lg-w-2/3 space-y-5 text-center mx-auto">
          <h1 className="text-gray-200 uppercase tracking-widest dark:text-white font-medium text-4xl">
            Get In Touch
          </h1>
          <div className="h-1 bg-purple-600 w-14 mx-auto"></div>
          <p className="text-gray-200 dark:text-gray-300 text-base leading-6">
            {CONTACT.intro}
          </p>
        </div>
        <div className="grid grid-cols-1 lg-grid-cols-1 gap-6 mt-16">
          <div className="lg:col-span-2">
            <form onSubmit={sendEmail} ref={form}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={onChangeHandler}
                    className="form-input hover:bg-zinc-900"
                    placeholder="Enter your Name"
                    value={data.name}
                  />

                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={onChangeHandler}
                    className="form-input hover:bg-zinc-900"
                    placeholder="Enter your Email"
                    value={data.email}
                  />
                </div>
                <label className="sr-only">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="form-input hover:bg-zinc-900"
                  placeholder="Enter your Message"
                  onChange={onChangeHandler}
                  rows="8"
                  value={data.message}
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block px-5 py-2.5 rounded-md text-lg font-bold cursor-pointer select-none outline-none transition-all duration-500 focus:outline-none focus:ring-0 focus:ring-offset-0 hover:-translate-y-1.5 bg-purple-800 text-white-500 lg:w-1/6 sm:w-1/4"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
