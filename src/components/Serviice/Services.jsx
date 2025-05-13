// // ServicesSection.jsx

// import React from "react";
// import { Grid, Box, Typography, IconButton } from "@mui/material";
// import "./ServiceStyle.css";
// import Phone from "../../../../assets/flip-phone_12892703 (1).png";
// import Mail from "../../../../assets/target_3826267 (2).png";
// import Horloge from "../../../../assets/timer_9733330.png";
// import Livraison from "../../../../assets/livraison.png";
// import { Link } from "react-router-dom";
// const ServicesSection = () => {
//   const handleEmailClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     // <div className="container">
//     <Grid container spacing={0}>
//       {/* Service 1 */}

//       <Grid item xs={12} sm={3}>
//         <Box className="coloredBox1">
//           <Link
//             to="/contactezNous"
//             style={{ textDecoration: "none" }}
//             onClick={handleEmailClick}
//           >
//             <IconButton>
//               <img src={Mail} alt="Mail Icon" />
//             </IconButton>
//           </Link>
//           <Typography variant="body1"> CONTACTEZ-NOUS</Typography>
//           <Typography style={{ color: "#b5c0d0" }}>
//             {" "}
//             CONTACTEZ-NOUS
//             <p>Prenez rendez-vous avec un professionnel.</p>
//           </Typography>
//         </Box>
//       </Grid>
//       {/* Service 2 */}
//       <Grid item xs={12} sm={3}>
//         <Box className="coloredBox2">
//           <IconButton>
//             {" "}
//             <img src={Phone} alt="Mail Icon" />
//           </IconButton>

//           <Typography variant="body1"> VISITE DU LOGEMENT</Typography>
//           <p>
//             Un expert prend contact avec vous pour répondre à toutes vos
//             questions et visiter votre logement.
//           </p>
//         </Box>
//       </Grid>

//       {/* Service 3 */}
//       <Grid item xs={12} sm={3}>
//         <Box className="coloredBox3">
//           <IconButton>
//             <img src={Horloge} alt="Horloge Icon" />
//           </IconButton>

//           <Typography variant="body1">Lancement</Typography>
//         </Box>
//       </Grid>
//     </Grid>
//     // </div>
//   );
// };

// export default ServicesSection;
import React from "react";
import "./ServiceStyle.css";
import rendezVousImage from "../../assets/rendez-vous-avec-un-prospect.jpeg";
import visiteImage from "../../assets/images.jpeg";
import lancementImage from "../../assets/airbnb.webp";

const ConfiezLocation = () => {
  return (
    <section className="confiez-section">
      <div className="confiez-container">
        <h2 className="confiez-title">
          Confiez votre location à notre Conciergerie à Nice
        </h2>
        <p className="confiez-description">
          Depuis 2023, Letshost Conciergerie accompagne les propriétaires et
          investisseurs dans la gestion de leurs locations courte durée.
          Présents dans plus de 100 localités, nous proposons un service clé en
          main pour une gestion sereine et optimisée de votre bien.
        </p>
        <div className="confiez-steps">
          <div className="confiez-step">
            <img
              src={rendezVousImage}
              alt="Prendre rendez-vous"
              className="confiez-step-image"
            />
            <h3 className="confiez-step-title">Contactez-nous</h3>
            <p className="confiez-step-description">
              Prenez rendez-vous avec un professionnel.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=+330605605337&text=Bonjour%2C+je+souhaite+obtenir+plus+d%27informations"
              target="_blank"
              rel="noopener noreferrer"
              className="confiez-button"
            >
              Réserver un RDV
            </a>
          </div>
          <div className="confiez-step">
            <img
              src={visiteImage}
              alt="Visite du logement"
              className="confiez-step-image"
            />
            <h3 className="confiez-step-title">Visite du logement</h3>
            <p className="confiez-step-description">
              Un expert prend contact avec vous pour répondre à toutes vos
              questions et visiter votre logement.
            </p>
          </div>
          <div className="confiez-step">
            <img
              src={lancementImage}
              alt="Lancement du service"
              className="confiez-step-image"
            />
            <h3 className="confiez-step-title">Lancement</h3>
            <p className="confiez-step-description">
              Après signature du mandat Lesthost, votre chargé(e) de compte crée
              votre annonce et l'aventure commence !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiezLocation;
