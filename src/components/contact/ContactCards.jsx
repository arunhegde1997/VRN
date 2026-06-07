import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function ContactCards() {
  return (
    <section className="contact-cards container">

      <div className="contact-card">
        <FiPhone className="contact-icon" />
        <h3>Phone</h3>
        <p>8431839208</p>
      </div>

      <div className="contact-card">
        <FiMail className="contact-icon" />
        <h3>Email</h3>
        <p>vrnproducts@gmail.com</p>
      </div>

      <div className="contact-card">
        <FiMapPin className="contact-icon" />
        <h3>Address</h3>
        <p>
          #16 Hosagadde, PO Itagi<br />
          Siddapur, Uttara Kannada
        </p>
      </div>

    </section>
  );
}

export default ContactCards;