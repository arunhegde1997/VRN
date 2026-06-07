function ContactForm() {
  return (
    <div className="contact-form-box">
      <h2>Send us a Message</h2>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="your@email.com"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          rows="6"
          placeholder="Tell us how we can help you..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;