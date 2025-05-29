// import React from "react";
// import { Button, Typography } from "@mui/material";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PhoneIcon from "@mui/icons-material/Phone";

// import Logo from "../../assets/logosans.png";
// import "./footer.css";
// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="sb__footer section__padding">
//         <div className="sb__footer-links">
//           <img src={Logo} alt="Logo de la société" className="footer-logo" />
//           <div className="sb__footer-links-div">
//             <h4>
//               <u>Information</u>
//             </h4>
//             <div style={{ marginTop: "15px" }}>
//               <a href="/notre-entreprise">
//                 <p>Notre entreprise</p>
//               </a>
//               <div style={{ marginTop: "5px" }}>
//                 <a href="/notre-clientele">
//                   <p>Notre clientèle</p>
//                 </a>
//               </div>
//               <div style={{ marginTop: "5px" }}>
//                 <a href="/contactezNous">
//                   <p>Contactez-Nous</p>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="sb__footer-links-div">
//             <h4>
//               <u>Letshost conciergerie</u>{" "}
//             </h4>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginTop: "10px",
//               }}
//             >
//               <MailOutlineIcon />
//               <Typography style={{ color: "white", marginLeft: "10px" }}>
//                 letshost@laposte.net
//               </Typography>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginTop: "10px",
//               }}
//             >
//               <PhoneIcon />
//               <Typography style={{ color: "white", marginLeft: "10px" }}>
//                 (+33) 06 05605337
//               </Typography>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Footer;

import React from "react";
import { Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from "../../assets/logosans.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-container">

          {/* Logo et infos de l'entreprise */}

          <div className="sb__footer-logo">
            <img
              src={Logo}
              alt="Letshost Conciergerie - Logo"
              className="footer-logo"
              loading="lazy"
            />
          </div>

          {/* Liens internes */}
          <nav className="sb__footer-links" aria-label="Liens utiles">
            <div className="sb__footer-links-div">
              <h4>Information</h4>
              <ul>
                <li>
                  <Link to="/notre-entreprise">Notre entreprise</Link>
                </li>
                <li>
                  <Link to="/notre-clientele">Notre clientèle</Link>
                </li>
                <li>
                  <Link to="/contactezNous">Contactez-nous</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Coordonnées */}
          <address className="sb__footer-contact" aria-label="Coordonnées de contact">
            <h4>Letshost Conciergerie</h4>
            <div className="footer-contact-item">
              <MailOutlineIcon />
              <Typography component="a" href="mailto:letshost@laposte.net" sx={{ color: "white", marginLeft: "10px", textDecoration: "none" }}>
                letshost@laposte.net
              </Typography>
            </div>
            <div className="footer-contact-item">
              <PhoneIcon />
              <Typography component="a" href="tel:+33605605337" sx={{ color: "white", marginLeft: "10px", textDecoration: "none" }}>
                (+33) 06 05 60 53 37
              </Typography>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
