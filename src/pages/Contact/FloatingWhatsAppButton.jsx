// FloatingWhatsAppButton.jsx
import React from 'react';
import './contactPage.css'; 

const FloatingWhatsAppButton = () => {
  const phoneNumber = '336 05 60 53 37'; 
  const message = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations");

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;
