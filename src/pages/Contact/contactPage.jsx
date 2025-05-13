import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { Box, Button, Snackbar, Alert, Typography } from "@mui/material";

import contactImage from "../../assets/nice.jpg";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import PhoneIcon from "../../assets/flip-phone_12892703 (1).png";
import MailIcon from "../../assets/target_3826267 (2).png";
import "./contactPage.css";
import ImageCarousel from "./ImageCarousel.jsx";
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { prenom, nom, email, sujet, message } = formData;
    const text = `👋 Bonjour,

Je m'appelle *${prenom} ${nom}*.

📧 Email : ${email}
📌 Sujet : ${sujet}

💬 Message :
${message}

Merci de me recontacter dès que possible. 🙏`;

    const phoneNumber = "33605605337";
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };
  const boxData = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Localisation",
      text: "Nice, France",
    },
    {
      icon: <img src={MailIcon} alt="Mail" className="contact-icon-img" />,
      title: "Email",
      text: "contact@letshost.fr",
    },
    {
      icon: <img src={PhoneIcon} alt="Phone" className="contact-icon-img" />,
      title: "Téléphone",
      text: "+33 6 05 60 53 37",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carousel-section">
        <ImageCarousel />
        <div className="contact-boxes">
          {boxData.map((item, i) => (
            <motion.div
              key={i}
              className="contact-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              custom={i}
            >
              {item.icon}
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="contact-content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* deuxieme partie du box */}
          <Box
            sx={{
              flex: 0.5,
              paddingLeft: "150px",
              textAlign: "left",
              mt: 6,
            }}
          >
            <div className="contact-image">
              <img src={contactImage} alt="Nice" />
            </div>
          </Box>
          <Box
            sx={{
              flex: 0.5,

              paddingRight: "90px",
              textAlign: "left",
              mt: 6,
            }}
          >
            <div className="contact-form">
              <h2>Let's start the conversation</h2>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="nom"
                placeholder="Nom de famille *"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="sujet"
                placeholder="Sujet *"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Commentaires / Questions *"
                onChange={handleChange}
                required
              />
              <button onClick={sendToWhatsApp} className="whatsapp-button">
                <FaWhatsapp /> Envoyer sur WhatsApp
              </button>
            </div>
          </Box>
        </Box>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
