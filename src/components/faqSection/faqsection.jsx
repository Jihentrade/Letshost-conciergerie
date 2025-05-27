import React, { useState } from "react";
import "./faqSection.css";
import faqImage from "../../assets/faq-image.jpg";

const faqs = [
  {
    question:
      "Quels services proposez-vous pour la prise en charge de ma propriété ?",
    answer:
      "Nous offrons une gamme complète de services, y compris la coordination des réservations, l’accueil des invités, l’entretien régulier, et la maintenance. Nous prenons également en charge la communication avec les locataires et la gestion des avis pour assurer une expérience fluide et professionnelle.",
  },
  {
    question:
      "Comment puis-je m'assurer que ma propriété sera bien entretenue ?",
    answer:
      "Nous veillons à ce que chaque propriété soit soigneusement entretenue grâce à des inspections régulières et des partenariats avec des professionnels locaux pour les réparations et le nettoyage. Vous recevrez des rapports réguliers pour vous tenir informé de l’état de votre bien.",
  },
  {
    question:
      "Comment sont déterminées les tarifications pour la prise en charge de ma propriété ?",
    answer:
      "Nos tarifs sont basés sur la taille et les spécificités de votre propriété ainsi que sur les services que vous choisissez. Nous proposons une transparence totale et pouvons vous fournir un devis détaillé après une évaluation initiale.",
  },
  {
    question:
      "Quelle est votre politique concernant les demandes spéciales des invités ?",
    answer:
      "Nous nous efforçons de répondre à toutes les demandes spéciales des invités dans la mesure du possible. Nous communiquons vos exigences spécifiques aux locataires et faisons tout notre possible pour garantir leur satisfaction tout en respectant les règles et les standards de votre propriété.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-image-container">
          <h2 className="faq-title">
            Les questions les plus fréquemment posées
          </h2>
          <img src={faqImage} alt="FAQ Illustration" className="faq-image" />
        </div>
        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                </div>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
