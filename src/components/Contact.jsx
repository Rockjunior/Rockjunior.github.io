import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // NOTE: To send emails from a frontend app, you need a backend or a third-party service.
  // Here, we'll use EmailJS (https://www.emailjs.com/) for client-side email sending.
  // 1. Sign up at emailjs.com, create a service, template, and get your USER_ID, SERVICE_ID, and TEMPLATE_ID.
  // 2. Install emailjs-com: npm install emailjs-com

  const SERVICE_ID = "your_service_id";
  const TEMPLATE_ID = "your_template_id";
  const USER_ID = "your_user_id";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "r28081999m@gmail.com",
        },
        USER_ID
      )
      .then(
        () => {
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-400">📬 Contact 📬</h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 mb-8">
          <a
            href="https://github.com/Rockjunior"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 underline text-lg font-semibold"
          >
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.03 1.02-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rodgers-maragia-20a8b5265/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 underline text-lg font-semibold"
          >
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
            LinkedIn
          </a>
          <a
            href="https://x.com/EmarRoman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 underline text-lg font-semibold"
          >
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M22.162 0h-4.326l-5.836 8.26l-5.836-8.26h-4.326l8.26 11.7l-8.26 12.3h4.326l5.836-8.26l5.836 8.26h4.326l-8.26-12.3z"/></svg>
            Twitter
          </a>
          <a
            href="mailto:r28081999m@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-primary-400 text-gray-900 font-bold rounded shadow hover:bg-primary-300 transition"
          >
            <svg width="24" height="24" fill="currentColor" className="inline"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
            Email Me
          </a>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 shadow-lg">
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400" required />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="px-4 py-2 rounded bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400" rows={4} required />
          <button type="submit" className="px-4 py-2 bg-primary-400 text-gray-900 font-bold rounded shadow hover:bg-primary-300 transition">Send</button>
          {submitted && <span className="text-green-400 mt-2">Thank you! Your message has been received.</span>}
        </form>
      </div>
    </section>
  );
} 