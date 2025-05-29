import React from "react";
import Navbar from "../../components/Navbar";
import coverImage from "../../../src/assets/conciergerie-nice-couverture.jpg";
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
import image1 from "../../assets/Acc1.png";
import image2 from "../../assets/Acc2.png";
import image3 from "../../assets/Acc3.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarrouselEmbla from "./CarrouselEmbla.jsx";

const theme = createTheme();

const Accueil = () => {
  // const images = [image1, image2, image3];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, []);
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Navbar />
  //     {/* <Box
  //       sx={{
  //         position: "relative",
  //         width: "100%",
  //         maxHeight: { xs: "300px", sm: "400px", md: "550px" },
  //         overflow: "hidden",
  //         backgroundColor: "white",
  //       }}
  //     >
  //       <img
  //         src={coverImage}
  //         alt="Couverture"
  //         style={{
  //           width: "100%",
  //           // height: "100%",
  //           objectFit: "cover",
  //           display: "block",
  //         }}
  //       />
  // </Box> */}
  // <Box
  //   sx={{
  //     position: "relative",
  //     width: "100%",
  //     maxHeight: { xs: "300px", sm: "400px", md: "550px" },
  //     overflow: "hidden",
  //     backgroundColor: "white",
  //   }}
  // >
  //   {images.map((img, index) => (
  //     <img
  //       key={index}
  //       src={img}
  //       alt={`Image slider ${index + 1}`}
  //       style={{
  //         width: "100%",
  //         objectFit: "cover",
  //         position: "absolute",
  //         top: 0,
  //         left: 0,
  //         opacity: currentIndex === index ? 1 : 0,
  //         transition: "opacity 1s ease-in-out",
  //         zIndex: currentIndex === index ? 1 : 0,
  //       }}
  //     />
  //   ))}
  // </Box>
  // const images = [image1, image2, image3];
  // const [current, setCurrent] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((current + 1) % images.length);
  //   }, 3500);
  //   return () => clearInterval(interval);
  // }, [current]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "550px" },
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
      </Box> */}
      <CarrouselEmbla />

      {/* <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "300px", sm: "400px", md: "550px" },
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </AnimatePresence>
    </Box> */}

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
