import React from "react";
import "./ServiceStyle.css";

const ServicesPersonnalises = () => {
  const services = [
    {
      title: "Optimisation de vos revenus",
      description:
        "Maximisez vos revenus locatifs grâce à des stratégies de tarification compétitives et un service de qualité supérieure.",
      icon: "💰",
    },
    {
      title: "Gestion des annonces",
      description:
        "Optimisation continue de vos annonces pour garantir une visibilité maximale et des taux d'occupation élevés.",
      icon: "📢",
    },
    {
      title: "Gestion de vos propriétés",
      description:
        "Assistance professionnelle pour la maintenance, la propreté, la sécurité et la satisfaction des locataires.",
      icon: "🏠",
    },
    {
      title: "Une équipe dédiée",
      description:
        "Une équipe locale basée à Nice offrant une assistance personnalisée tout au long du processus.",
      icon: "👥",
    },
    {
      title: "Ménage Pro",
      description:
        "Service de ménage professionnel et complet entre chaque location pour garantir une propreté impeccable.",
      icon: "🧼",
    },
    {
      title: "Expérience Guest",
      description:
        "Accueil chaleureux, assistance locale et équipements de qualité pour un séjour inoubliable.",
      icon: "🌟",
    },
    {
      title: "Entreprise Locale",
      description:
        "Gestion des propriétés saisonnières avec une équipe locale pour une expérience de location sans souci.",
      icon: "📍",
    },
    {
      title: "Rentabilité Max",
      description:
        "Stratégies de tarification compétitives et gestion professionnelle pour maximiser vos revenus locatifs.",
      icon: "📈",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Des services personnalisés</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPersonnalises;
