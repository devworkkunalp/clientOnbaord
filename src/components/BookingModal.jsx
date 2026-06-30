import React, { useState, useEffect } from 'react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form states on close
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey || accessKey.trim() === '') {
      alert(
        "To receive real emails on devwork.kunalp@gmail.com, please:\n\n" +
        "1. Go to https://web3forms.com/ and submit your email to get a free Access Key.\n" +
        "2. Open the '.env' file in the project root.\n" +
        "3. Add your key like so:\n" +
        "   VITE_WEB3FORMS_KEY=your_key_here\n\n" +
        "Showing demo success screen for now."
      );
      setIsSubmitted(true);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: "Sprintline — New Call Request!",
          from_name: "Sprintline Showcase"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Failed to send email. Please check your Web3Forms Access Key in the .env file.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit form. Please check your network connection.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      id="modalOverlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" onClick={onClose} aria-label="Close form">
          ✕
        </button>

        {!isSubmitted ? (
          <div id="formView">
            <h3 id="modalTitle">Book a call</h3>
            <p className="modal-sub">
              Tell us a bit about your project and we'll get back to you within one business day.
            </p>
            <form id="bookingForm" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Work email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                What are you looking to build?
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '6px' }}
              >
                Request a call
              </button>
            </form>
          </div>
        ) : (
          <div id="successView">
            <div className="success-icon">✓</div>
            <h3>Thanks — that's in.</h3>
            <p className="modal-sub">
              We've got your details and will reach out shortly to find a time that works.
            </p>
            <button className="btn-ghost" style={{ width: '100%' }} onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
