import React from "react";
import "./ServiceStyle.css";

const ServicesPersonnalises = () => {
  const services = [
    {
      title: "Optimisation de vos revenus locatifs à Nice",
      description:
        "Maximisez vos revenus locatifs grâce à des stratégies de tarification compétitives et un service de gestion locative professionnelle de qualité supérieure.",
      icon: "💰",
      ariaLabel: "Icône de sac d'argent",
    },
    {
      title: "Gestion professionnelle des annonces immobilières",
      description:
        "Optimisation continue de vos annonces pour garantir une visibilité maximale sur les plateformes de location et un taux d'occupation élevé.",
      icon: "📢",
      ariaLabel: "Icône de mégaphone",
    },
    {
      title: "Gestion complète de vos propriétés",
      description:
        "Assistance professionnelle pour la maintenance, la propreté, la sécurité et la satisfaction des locataires pour vos biens immobiliers.",
      icon: "🏠",
      ariaLabel: "Icône de maison",
    },
    {
      title: "Une équipe dédiée basée à Nice",
      description:
        "Une équipe locale offrant une assistance personnalisée tout au long du processus de gestion locative.",
      icon: "👥",
      ariaLabel: "Icône de groupe de personnes",
    },
    {
      title: "Service de ménage professionnel entre chaque location",
      description:
        "Garantissez une propreté impeccable avec notre service de ménage complet et professionnel pour vos locations saisonnières.",
      icon: "🧼",
      ariaLabel: "Icône de savon",
    },
    {
      title: "Expérience client exceptionnelle",
      description:
        "Accueil chaleureux, assistance locale et équipements de qualité pour assurer un séjour inoubliable à vos locataires.",
      icon: "🌟",
      ariaLabel: "Icône d'étoile",
    },
    {
      title: "Entreprise locale spécialisée en gestion saisonnière",
      description:
        "Bénéficiez d’une gestion sans souci de vos propriétés saisonnières grâce à notre expertise locale.",
      icon: "📍",
      ariaLabel: "Icône de localisation",
    },
    {
      title: "Maximisez la rentabilité de vos biens immobiliers",
      description:
        "Stratégies de tarification compétitives et gestion professionnelle pour maximiser vos revenus locatifs tout en optimisant la satisfaction locataire.",
      icon: "📈",
      ariaLabel: "Icône de graphique en hausse",
    },
  ];

  return (
    <section className="services-section" aria-label="Services personnalisés pour la gestion locative">
      <h2 className="services-title">Des services personnalisés</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <article className="service-card" key={index} tabIndex="0" aria-labelledby={`service-title-${index}`} aria-describedby={`service-desc-${index}`}>
            <div className="service-icon" role="img" aria-label={service.ariaLabel}>
              {service.icon}
            </div>
            <h3 id={`service-title-${index}`} className="service-title">
              {service.title}
            </h3>
            <p id={`service-desc-${index}`} className="service-description">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesPersonnalises;
