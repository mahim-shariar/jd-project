/* eslint-disable react/no-unescaped-entities */
import { CiMail } from "react-icons/ci";
import { useState, useRef } from "react";
import { Snackbar, Alert } from "@mui/material"; // Import Snackbar and Alert from MUI
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    your_budge: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message for Snackbar

  const form = useRef(); // Create a reference for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m066f4o", "template_brk41kp", form.current, {
        publicKey: "N29Ebh1zhlHE9Wcdp",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSnackbarMessage("Your message was sent successfully!");
          setOpenSnackbar(true); // Show success message
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSnackbarMessage("There was an error sending your message.");
          setOpenSnackbar(true); // Show error message
        }
      );

    // Reset form data after submission
    setFormData({
      from_name: "",
      from_email: "",
      phone: "",
      your_budge: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close Snackbar on user action (e.g., after timeout)
  };

  return (
    <div style={{ padding: "50px", marginTop: "100px" }}>
      {/* Snackbar for success or error message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Auto hide after 6 seconds
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Position the Snackbar at the top-center
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage.includes("error") ? "error" : "info"}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Header Button */}
      <button className="header-button">
        <CiMail />
        CONTACT
      </button>

      {/* Section Headers */}
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        Let's Work <span className="text-[#14c5fd]">Together</span>
      </h1>

      <div className="mt-12 contact-form">
        <form ref={form} onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Success Message */}
          <div
            className="hidden alert alert-success messenger-box-contact__msg"
            role="alert"
          >
            <p>Your message was sent successfully.</p>
          </div>

          {/* Full Name */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="input-group">
              <label htmlFor="full-name" className="block mb-2 text-white">
                FULL NAME <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                id="full-name"
                name="from_name"
                placeholder="Your Full Name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full py-1 rounded-md bg-transparent focus:outline-none focus:ring-0 text-white font-semibold focus:border-[#14c5fd] cursor-text"
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email" className="block mb-2 text-white">
                EMAIL <sup className="text-red-500">*</sup>
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Your email address"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full py-1 rounded-md bg-transparent text-white font-semibold focus:outline-none focus:ring-0  focus:border-[#14c5fd] cursor-text"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="input-group">
              <label htmlFor="phone" className="block mb-2 text-white">
                PHONE <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-1 rounded-md bg-transparent focus:outline-none focus:ring-0 text-white font-semibold focus:border-[#14c5fd] cursor-text"
              />
            </div>

            {/* Budget */}
            <div className="input-group">
              <label htmlFor="budget" className="block mb-2 text-white">
                YOUR BUDGET <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="number"
                id="budget"
                name="your_budget"
                placeholder="A range budget for your project"
                value={formData.your_budget}
                onChange={handleChange}
                className="w-full py-1 rounded-md bg-transparent focus:outline-none focus:ring-0 text-white font-semibold focus:border-[#14c5fd] cursor-text"
              />
            </div>
          </div>

          {/* Message */}
          <div className="input-group">
            <label htmlFor="message" className="block mb-2 text-white">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here ..."
              value={formData.message}
              onChange={handleChange}
              className="w-full py-1 rounded-md bg-transparent focus:outline-none focus:ring-0 text-white font-semibold focus:border-[#14c5fd] cursor-text"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="input-group">
            <button
              type="submit"
              className="mt-5 px-6 py-2 border-2 border-[#14c5fd] bg-[#14c5fd] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:border-[#14c5fd] hover:border-2 hover:text-[#14c5fd] rounded-3xl transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
