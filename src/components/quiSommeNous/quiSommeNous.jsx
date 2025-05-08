import React from "react";
import "./QuiSommesNous.css";
import fondateurImage from "../../assets/tourisme-nice.png"; 

const QuiSommesNous = () => {
  return (
    <section className="qui-sommes-nous-section">
      <div className="qui-sommes-nous-container">
        <div className="image-container">
          <img
            src={fondateurImage}
            alt="Fondateur"
            className="fondateur-image"
          />
        </div>
        <div className="text-container">
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <p className="section-description">
            Letshost Conciergerie est née de la vision d’Achraf Trad, passionné
            par l’hospitalité et l’optimisation de la location saisonnière.
            Grâce à son expertise et à son engagement, Achraf a su développer
            une approche personnalisée de la gestion locative, plaçant la
            satisfaction des propriétaires et des voyageurs au cœur de ses
            priorités. Son objectif : offrir un service clé en main, alliant
            efficacité, transparence et excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
