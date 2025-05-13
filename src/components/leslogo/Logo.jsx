// ServicesSection.jsx

import React from "react";
import { Grid, Box, IconButton } from "@mui/material";
import "./LogoStyle.css";
import airbnb from "../../assets/airbnblogo.png";
import abritel from "../../assets/abritellogo.png";
import booking from "../../assets/booking_logo.png";
import trip from "../../assets/tripadvisor-logo-png_seeklogo-222085-removebg-preview.png";
import hotels from "../../assets/lesHotelsLogo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  const handleEmailClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    // <div className="container">
    <Grid container justifyContent="center">
      {/* Service 1 */}

      <Grid item xs={12} sm={6} md={3}>
        <Box className="coloredBox1">
          <Link style={{ textDecoration: "none" }} onClick={handleEmailClick}>
            <IconButton>
              <img src={airbnb} alt="Mail Icon" className="logo-icon" />
            </IconButton>
          </Link>
        </Box>
      </Grid>
      {/* Service 2 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box className="coloredBox2">
          <IconButton>
            {" "}
            <img src={abritel} alt="Mail Icon" className="logo-icon" />
          </IconButton>
        </Box>
      </Grid>

      {/* Service 3 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box className="coloredBox3">
          <IconButton>
            <img src={booking} alt="Horloge Icon" className="logo-icon" />
          </IconButton>
        </Box>
      </Grid>

      {/* Service 4 */}
      <Grid item xs={12} sm={6} md={3}>
        <Box className="coloredBox4">
          <IconButton>
            <img src={trip} alt="Livraison Icon" className="logo-icon" />
          </IconButton>
        </Box>
      </Grid>
      {/* Service 5 */}

      <Grid item xs={12} sm={6} md={3}>
        <Box className="coloredBox1">
          <Link style={{ textDecoration: "none" }} onClick={handleEmailClick}>
            <IconButton>
              <img src={hotels} alt="Mail Icon" className="logo-icon" />
            </IconButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
    // </div>
  );
};

export default Logo;
