// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Remplacez cette alerte par l'envoi des données à votre backend ou service d'email
    alert(
      `Nom: ${formData.nom}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    // Réinitialiser le formulaire
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nom :
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Message :
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
