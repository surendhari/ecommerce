import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully ✅");
    console.log(form);
  };

  return (
    <div className="page">
      <h1>Contact Us 📞</h1>

      <div className="contact-container">

        <div className="contact-form">
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button onClick={handleSubmit}>Send</button>
        </div>

        <div className="contact-info">
          <h3>Our Details</h3>
          <br />
          <p>📍 Salem, Tamil Nadu</p>
        <br />
          <p>📞 +91 9876543210</p>
          <br />
          <p>📧 support@myshop.com</p>

        </div>
<div className="contact-info">
  <h3>Contact Options</h3>

  <p>
    📱
    <a
      href="https://wa.me/919876543210"
      target="_blank"
    >
      WhatsApp Us
    </a>
  </p>

  <p>
    📧
    <a href="mailto:support@myshop.com">
      Email Us
    </a>
  </p>
</div>
      </div>
    </div>
  );
}