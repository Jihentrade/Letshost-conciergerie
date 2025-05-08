import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Carte from "../../assets/WhatsApp Image 2025-04-30 à 11.27.04_ba06097c (2).jpg";
import Box from "@mui/material/Box";

const Aproposdenous = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8 flex justify-center items-center">
      <div className="w-full max-w-md px-4">
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
          src={Carte}
          alt="Couverture"
          style={{
            objectFit: "cover",
            width: "100%",
            maxHeight: "700px",
          }}
        />
          </Box>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Aproposdenous;
