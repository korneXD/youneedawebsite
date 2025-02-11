"use client";

import sendEmail from "@/actions/sendEmail";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "sonner";

export default function FormLayout() {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleFocus = (field) =>
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) =>
    setFocusedFields((prev) => ({ ...prev, [field]: value !== "" }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      setFocusedFields({ name: false, email: false, message: false });
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      toast.success("Email sent!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.section
      ref={inViewRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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
        {[
          { id: "name", type: "text", placeholder: "Your Name" },
          { id: "email", type: "email", placeholder: "Email Address" },
        ].map(({ id, type, placeholder }) => (
          <div key={id} className="relative">
            <input
              required
              ref={id === "name" ? nameRef : emailRef}
              type={type}
              id={id}
              onFocus={() => handleFocus(id)}
              onBlur={(e) => handleBlur(id, e.target.value)}
              onChange={(e) =>
                setFormData({ ...formData, [id]: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-inner focus:outline-none"
            />
            <span
              className={clsx(
                "pointer-events-none absolute left-3 transition-all duration-300",
                focusedFields[id]
                  ? "-top-2 bg-white px-1 text-xs text-gray-500"
                  : "text-md top-2 text-gray-500",
              )}
            >
              {placeholder}
            </span>
          </div>
        ))}

        <div className="relative">
          <textarea
            required
            ref={messageRef}
            rows="4"
            id="message"
            onFocus={() => handleFocus("message")}
            onBlur={(e) => handleBlur("message", e.target.value)}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 shadow-inner focus:outline-none"
          />
          <span
            className={clsx(
              "pointer-events-none absolute left-3 transition-all duration-300",
              focusedFields.message
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
