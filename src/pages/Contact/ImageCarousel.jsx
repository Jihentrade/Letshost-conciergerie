// src/components/ImageCarousel.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageCarousel.css";
const images = [
  require("../../assets/nice1.jpg"),
  require("../../assets/nice2.jpg"),
  require("../../assets/nice3.avif"),
  require("../../assets/nice4.jpg"),
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel-container">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="Nice view"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="carousel-image"
        />
      </AnimatePresence>
      <div className="carousel-text">
        <h3>Des questions sur nos services ?</h3>
        <p>
          Envie d’en savoir plus ou de réserver votre séjour ?<br />
          Nous vous accompagnons dans tous vos projets de location courte durée
          à Nice.
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
