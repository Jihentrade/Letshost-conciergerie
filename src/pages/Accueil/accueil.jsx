import React from "react";
import Navbar from "../../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../../components/footer";
import "./styleAccueil.css";
import ServicesPersonnalises from "../../components/Servicee";
import QuiSommeNous from "../../components/quiSommeNous";
import FAQSection from "../../components/faqSection";
import Service from "../../components/Serviice";
import LogoServ from "../../components/leslogo";
import { Helmet } from "react-helmet";
import video from "../../assets/letshost.mp4";
const theme = createTheme();

const Accueil = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxHeight: { xs: "300px", sm: "400px", md: "550px" },
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            objectFit: "contain",
            display: "block",
            // height: "auto",
          }}
        >
          <source src={video} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </Box>

      <section className="conciergerie-section">
        <Helmet>
          <title>
            Conciergerie Airbnb à Nice - Gestion de locations saisonnières
          </title>
          <meta
            name="description"
            content="Confiez votre bien à notre conciergerie Airbnb à Nice. Optimisation, accueil, ménage, gestion totale sans engagement. Maximisez vos revenus !"
          />
          <meta
            name="keywords"
            content="conciergerie Airbnb Nice, gestion location saisonnière, services Airbnb Nice, location courte durée Nice"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://votre-site.com/" />
        </Helmet>

        <div className="conciergerie-container">
          <h2 className="conciergerie-title">Conciergerie à Nice</h2>
          <p className="conciergerie-subtitle">
            Nous gérons votre location saisonnière Airbnb
          </p>
          <p className="conciergerie-description">
            Propriétaire d’un bien à Nice ? Confiez la gestion de votre location
            saisonnière à notre service de conciergerie. Nous prenons en charge
            l’ensemble du processus : création et optimisation de votre annonce
            sur des plateformes telles qu’Airbnb, Booking.com, Abritel et
            Hotels.com, accueil des voyageurs, ménage professionnel,
            maintenance, et gestion des réservations. Notre objectif est de
            maximiser vos revenus tout en vous libérant des contraintes
            quotidiennes. Profitez d’un service clé en main, sans engagement,
            pour une tranquillité d’esprit totale.
          </p>
        </div>
      </section>
      <ServicesPersonnalises />
      <QuiSommeNous />
      <FAQSection />
      <Service />

      <LogoServ />
      <Footer />
    </ThemeProvider>
  );
};

export default Accueil;
