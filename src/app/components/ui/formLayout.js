"use client";

import sendEmail from "@/actions/sendEmail";
import clsx from "clsx";
import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

export default function FormLayout() {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isFocusedName, setFocusedName] = useState(false);
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedMessage, setFocusedMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      sendEmail(formData);
      document.getElementById("name").value = "";
      setFocusedName(false);
      document.getElementById("email").value = "";
      setFocusedEmail(false);
      document.getElementById("message").value = "";
      setFocusedMessage(false);
      toast.success("Email send!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <motion.section
      ref={inViewRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-md space-y-6"
    >
      <div className="space-y-2 text-center">
        <span className="text-4xl">📨</span>
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="text-gray-400">
          Ready to start your project? Send us a message!
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            required
            type="text"
            id="name"
            onFocus={() => setFocusedName(true)}
            onBlur={(e) => setFocusedName(e.target.value !== "")}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-inner focus:outline-none"
          />
          <span
            className={clsx(
              "pointer-events-none absolute left-3 transition-all duration-300",
              isFocusedName
                ? "-top-2 bg-white px-1 text-xs text-gray-500"
                : "text-md top-2 text-gray-500",
            )}
          >
            Your Name
          </span>
        </div>
        <div className="relative">
          <input
            required
            type="email"
            id="email"
            onFocus={() => setFocusedEmail(true)}
            onBlur={(e) => setFocusedEmail(e.target.value !== "")}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-inner focus:outline-none"
          />
          <span
            className={clsx(
              "pointer-events-none absolute left-3 transition-all duration-300",
              isFocusedEmail
                ? "-top-2 bg-white px-1 text-xs text-gray-500"
                : "text-md top-2 text-gray-500",
            )}
          >
            Email Address
          </span>
        </div>
        <div className="relative">
          <textarea
            required
            rows="4"
            id="message"
            onFocus={() => setFocusedMessage(true)}
            onBlur={(e) => setFocusedMessage(e.target.value !== "")}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 shadow-inner focus:outline-none"
          ></textarea>
          <span
            className={clsx(
              "pointer-events-none absolute left-3 transition-all duration-300",
              isFocusedMessage
                ? "-top-2 bg-white px-1 text-xs text-gray-500"
                : "text-md top-2 text-gray-500",
            )}
          >
            Your Message
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:scale-105 hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
