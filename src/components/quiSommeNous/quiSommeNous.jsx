// import React from "react";
// import "./QuiSommesNous.css";
// import fondateurImage from "../../assets/tourisme-nice.png";

// const QuiSommesNous = () => {
//   return (
//     <section className="qui-sommes-nous-section">
//       <div className="qui-sommes-nous-container">
//         <div className="image-container">
//           <img
//             src={fondateurImage}
//             alt="Fondateur"
//             className="fondateur-image"
//           />
//         </div>
//         <div className="text-container">
//           <h2 className="section-title">Qui sommes-nous ?</h2>
//           <p className="section-description">
//             Letshost Conciergerie est née de la vision d’Achraf Trad, passionné
//             par l’hospitalité et l’optimisation de la location saisonnière.
//             Grâce à son expertise et à son engagement, Achraf a su développer
//             une approche personnalisée de la gestion locative, plaçant la
//             satisfaction des propriétaires et des voyageurs au cœur de ses
//             priorités. Son objectif : offrir un service clé en main, alliant
//             efficacité, transparence et excellence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuiSommesNous;
import React from "react";
import "./QuiSommesNous.css";
import fondateurImage from "../../assets/tourisme-nice.png";

const QuiSommesNous = () => {
  return (
    <section
      className="qui-sommes-nous-section"
      aria-label="Présentation de Letshost Conciergerie, expert en gestion locative saisonnière à Nice"
      role="region"
    >
      <div className="qui-sommes-nous-container">
        <figure className="image-container">
          <img
            src={fondateurImage}
            alt="Photo d’Achraf Trad, fondateur de Letshost Conciergerie à Nice"
            className="fondateur-image"
          />
        </figure>
        <div className="text-container">
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <p className="section-description">
            <strong>Letshost Conciergerie</strong> est née de la vision d’
            <strong>Achraf Trad</strong>, passionné par l’
            <strong>hospitalité</strong> et l’
            <strong>optimisation de la location saisonnière à Nice</strong>.
            Grâce à son expertise et à son engagement, Achraf a su développer
            une approche personnalisée de la gestion locative, plaçant la
            satisfaction des <strong>propriétaires</strong> et des{" "}
            <strong>voyageurs</strong> au cœur de ses priorités. Son objectif :
            offrir un service clé en main, alliant <strong>efficacité</strong>,{" "}
            <strong>transparence</strong> et <strong>excellence</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuiSommesNous;
