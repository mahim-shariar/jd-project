/* eslint-disable react/no-unescaped-entities */
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Subject 1",
    budget: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div style={{ padding: "50px", marginTop: "100px" }}>
      {/* Header Button */}
      <button className="header-button">
        <CiMail />
        CONTACT
      </button>

      {/* Section Headers */}
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        Let's Work <span className="text-[#14c5fd]">Together</span>
      </h1>

      <div className="contact-form mt-12">
        <form
          onSubmit={handleSubmit}
          className="w-fullspace-y-6  rounded-lg shadow-md"
        >
          {/* Success Message */}
          <div
            className="alert alert-success messenger-box-contact__msg hidden"
            role="alert"
          >
            <p>Your message was sent successfully.</p>
          </div>

          <div className="flex gap-4 my-4">
            <TextField
              label="Full Name"
              variant="standard"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              fullWidth
              className="mb-4"
              placeholder="Your Full Name"
            />

            {/* Email */}
            <TextField
              label="Email"
              variant="standard"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              className="mb-4"
              placeholder="Your email address"
            />
          </div>

          <div className="flex gap-4 my-4">
            <TextField
              label="Phone (Optional)"
              variant="standard"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              className="mb-4"
              placeholder="Your phone number"
            />

            {/* Budget */}
            <TextField
              label="Your Budget (Optional)"
              variant="standard"
              name="budget"
              type="number"
              value={formData.budget}
              onChange={handleChange}
              fullWidth
              className="mb-4"
              placeholder="A range budget for your project"
            />
          </div>

          <TextField
            label="Message"
            variant="standard"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            className="mb-4"
            placeholder="Write your message here ..."
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-5 px-6 py-2 border-2 border-[#14c5fd] bg-[#14c5fd] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:border-[#14c5fd] hover:border-2 hover:text-[#14c5fd] rounded-3xl  transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
