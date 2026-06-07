import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactCards from "../components/contact/ContactCards";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import BusinessHours from "../components/contact/BusinessHours";
import ContactCTA from "../components/contact/ContactCTA";

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactCards />

      <section className="contact-main container">
        <ContactForm />

        <div>
          <ContactMap />
          <BusinessHours />
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Contact;