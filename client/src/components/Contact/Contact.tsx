import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://hillary-portfolio.onrender.com", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-12 px-5 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-5">
        Contact{" "}
        <span className="text-[#6B6B6B] text-lg sm:text-xl md:text-2xl">
          Me
        </span>
      </h2>
      <p className="text-base text-gray-600 mb-10">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-[#B3B3B3] p-6 rounded-lg shadow-md text-left text-[#333]"
        >
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 mb-4 rounded border border-[#333]  text-black"
          />

          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 mb-4 rounded border border-[#333]  text-black"
          />

          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-2 mb-4 rounded border border-[#333]  text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-[#6B6B6B] font-semibold px-4 py-2 rounded hover:bg-[#4B4B4B] hover:text-[#ffffff] hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="max-w-sm w-full text-left">
          <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
          <ul>
            <li className="mb-2 flex items-center gap-2">
              <i className="bx bxs-envelope text-lg" />
              <em>hilarygebremedhn28@gmail.com</em>
            </li>
            <li className="mb-2 flex items-center gap-2">
              <i className="bx bx-phone text-lg animate-spin-slow" />
              <em>+251 989834889</em>
            </li>
            <li className="mt-2">
              <strong>Location:</strong> Addis Ababa, Ethiopia
            </li>
          </ul>

          <ul className="flex mt-6 gap-5 text-2xl">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1877F2] transition"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hilary-gebremedhn-97528b20b"
                className="text-gray-600 hover:text-[#1877F2] transition"
              >
                <i className="bx bxl-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#1877F2] transition"
              >
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/HilaryGH"
                className="text-gray-600 hover:text-black transition"
              >
                <i className="bx bxl-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
