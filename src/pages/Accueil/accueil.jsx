import React from "react";
import Navbar from "../../components/Navbar";
import coverImage from "../../../src/assets/airbnb_logo.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Footer from "../../components/footer";
import "./styleAccueil.css";
import ServicesPersonnalises from "../../components/Servicee";
import QuiSommeNous from "../../components/quiSommeNous";
import FAQSection from "../../components/faqSection";
import Service from "../../components/Serviice";
import LogoServ from "../../components/leslogo";
const theme = createTheme();

const Accueil = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <img
          src={coverImage}
          alt="Couverture"
          style={{
            objectFit: "cover",
            width: "100%",
            maxHeight: "550px",
          }}
        />

        <section className="conciergerie-section">
          <div className="conciergerie-container">
            <h2 className="conciergerie-title">Conciergerie à Nice</h2>
            <p className="conciergerie-subtitle">
              Nous gérons votre location saisonnière Airbnb
            </p>
            <p className="conciergerie-description">
              Propriétaire d’un bien à Nice ? Confiez la gestion de votre
              location saisonnière à notre service de conciergerie. Nous prenons
              en charge l’ensemble du processus : création et optimisation de
              votre annonce sur des plateformes telles qu’Airbnb, Booking.com,
              Abritel et Hotels.com, accueil des voyageurs, ménage
              professionnel, maintenance, et gestion des réservations. Notre
              objectif est de maximiser vos revenus tout en vous libérant des
              contraintes quotidiennes. Profitez d’un service clé en main, sans
              engagement, pour une tranquillité d’esprit totale.
            </p>
          </div>
        </section>
        <ServicesPersonnalises />
        <QuiSommeNous />
        <FAQSection />
        <Service />
      </Box>
      <LogoServ />
      <Footer />
    </ThemeProvider>
  );
};

export default Accueil;
