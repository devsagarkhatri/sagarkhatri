import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import linkedin from "../assets/social/linkedin.png";
import twitter from "../assets/social/twitter.png";
import github from "../assets/social/github.png";
import peerlist from "../assets/social/Peerlist.png";
import vercel from "../assets/vercel.png";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Email via Portfolio",
          from_email: form.email,
          to_email: "dev.sagarkhatri@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`pb-0`}>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <p className={styles.sectionSubText}>Get in touch</p>
            <a href="https://github.com/devsagarkhatri" target={"_blank"}>
              <img
                className="social"
                src={github}
                height="auto"
                width={"30px"}
              />
            </a>{" "}
            <a href="https://twitter.com/DevSagarKhatri" target={"_blank"}>
              <img
                className="social"
                src={twitter}
                height="auto"
                width={"30px"}
              />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/sagarkhatri/"
              target={"_blank"}
            >
              <img
                className="social"
                src={linkedin}
                height="auto"
                width={"30px"}
              />
            </a>{" "}
            <a href="https://peerlist.io/devsagarkhatri" target={"_blank"}>
              <img
                className="social"
                src={peerlist}
                height="auto"
                width={"30px"}
              />
            </a>{" "}
          </div>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, .02) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, .02) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{
                  background:
                    "linear-gradient(rgba(255, 255, 255, .02) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              style={{
                paddingLeft: "28px",
                paddingRight: "28px",
                background: "linear-gradient(to right,#3c55a9,#633fd3)",
                boxShadow: "0 0 15px 1px #4662bd",
                borderRadius: "30px",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div
        className="pt-6 mt-6 mb-0 pb-0 text-sm text-center dark:text-gray-400"
        // style={{ display: "flex" }}
      >
        © All rights reserved. | Made with ❤️ in 🇮🇳
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
