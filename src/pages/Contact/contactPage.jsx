// ContactPage.jsx
import React from "react";
import ContactForm from "./contactForm";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./contactPage.css";

const ContactPage = () => {
  return ( 
    <>
     <Navbar />
    <div className="contact-page">
      <h1>Contactez-nous</h1>
      <ContactForm />
      <FloatingWhatsAppButton />
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
