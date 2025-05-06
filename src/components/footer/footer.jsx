import React from "react";
import { Button, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

import Logo from "../../assets/logosans.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <img src={Logo} alt="Logo de la société" className="footer-logo" />
          <div className="sb__footer-links-div">
            <h4>
              <u>Information</u>
            </h4>
            <div style={{ marginTop: "15px" }}>
              <a href="/notre-entreprise">
                <p>Notre entreprise</p>
              </a>
              <div style={{ marginTop: "5px" }}>
                <a href="/notre-clientele">
                  <p>Notre clientèle</p>
                </a>
              </div>
              <div style={{ marginTop: "5px" }}>
                <a href="/contactezNous">
                  <p>Contactez-Nous</p>
                </a>
              </div>
            </div>
          </div>

          <div className="sb__footer-links-div">
            <h4>
              <u>Letshost conciergerie</u>{" "}
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <MailOutlineIcon />
              <Typography style={{ color: "white", marginLeft: "10px" }}>
                letshost@laposte.net
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <PhoneIcon />
              <Typography style={{ color: "white", marginLeft: "10px" }}>
                (+33) 06 05605337
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
