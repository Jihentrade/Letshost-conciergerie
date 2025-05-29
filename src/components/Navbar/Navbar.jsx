import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../src/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", color: "#007bff" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo & Nom Entreprise (Desktop) */}
          <Typography
            variant="h6"
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#176B87",
              textDecoration: "none",
              textAlign: "center",
              flex: 1,
            }}
          >
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt="Logo MonEntreprise - Agence immobilière à Nice"
                style={{ width: "85px" }}
                loading="lazy"
              />
            </Link>
          </Typography>

          {/* Menu Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Menu principal"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ color: "#176B87" }}>
                  Accueil
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/Aproposdenous"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center" sx={{ color: "#176B87" }}>
                  À propos de nous
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contact"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center" sx={{ color: "#176B87" }}>
                  Contact
                </Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/obtenirUneEstimation"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center" sx={{ color: "#176B87" }}>
                  Obtenir une estimation
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontSize: "small",
            }}
          />

          {/* Nom Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "#176B87",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <Link to="/" style={{ color: "#176B87", textDecoration: "none" }}>
              Letshost Nice
            </Link>
          </Typography>

          {/* Menu Desktop */}
          <nav role="navigation" aria-label="Navigation principale">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button component={Link} to="/" sx={{ my: 2, color: "#176B87" }}>
                Accueil
              </Button>
              <Button
                component={Link}
                to="/Aproposdenous"
                sx={{ my: 2, color: "#176B87" }}
              >
                À propos de nous
              </Button>
              <Button
                component={Link}
                to="/contact"
                sx={{ my: 2, color: "#176B87" }}
              >
                Contact
              </Button>
              <Button
                component={Link}
                to="/obtenirUneEstimation"
                sx={{ my: 2, color: "#176B87" }}
              >
                Obtenir une estimation
              </Button>
            </Box>
          </nav>
          <IconButton
            href="https://wa.me/33605605337"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#25D366",
              ml: 2,
              "&:hover": {
                backgroundColor: "rgba(37, 211, 102, 0.1)",
              },
            }}
            aria-label="Contact WhatsApp"
          >
            <WhatsAppIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;





// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import logo from "../../../src/assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import Aproposdenous from "../../pages/AproposDeNous/aproposdenous";

// // import { useSelector } from "react-redux";

// function Navbar() {
//   const navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   // const isAdmin = admin.role === 'admin'
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleDashboard = () => {
//     navigate("/dashboard");
//   };

//   // Rediriger vers la page "À propos de nous"
//   const handleOpenProposdenous = () => {
//     navigate("/Aproposdenous");
//   };

//   // Rediriger vers la page "Accueil"
//   const handleOpenAccueil = () => {
//     navigate("/");
//   };
//   const handleContact = () => {
//     navigate("/contact");
//   };
//   const handleDevis = () => {
//     navigate("/obtenirUneEstimation");
//   };
//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "#ffffff", color: "#007bff" }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 70,
//               letterSpacing: ".3rem",
//               color: "#176B87",
//               textDecoration: "none",
//               textAlign: "center",
//               flex: 1,
//             }}
//           >
//             <img src={logo} alt="Logo" style={{ width: "85px" }} />
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="#176B87"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               <MenuItem onClick={handleOpenAccueil}>
//                 <Typography textAlign="center" sx={{ color: "#176B87" }}>
//                   Accueil
//                 </Typography>
//               </MenuItem>
//               <MenuItem onClick={handleOpenProposdenous}>
//                 <Typography textAlign="center" sx={{ color: "#176B87" }}>
//                   À propos de nous
//                 </Typography>
//               </MenuItem>

//               <MenuItem onClick={handleCloseNavMenu}>
//                 <Typography textAlign="center" sx={{ color: "#176B87" }}>
//                   Contact
//                 </Typography>
//               </MenuItem>
//               <Typography textAlign="center" sx={{ color: "#176B87" }}>
//                 Obtenir une estimation
//               </Typography>
//             </Menu>
//           </Box>

//           <AdbIcon
//             sx={{
//               display: { xs: "flex", md: "none" },
//               mr: 1,
//               fontSize: "small",
//             }}
//           />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "#176B87",
//               textDecoration: "none",
//               justifyContent: "center",
//             }}
//           ></Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Button
//               onClick={handleOpenAccueil}
//               sx={{
//                 my: 2,
//                 color: "#176B87",
//                 display: "block",
//                 justifyContent: "center",
//               }}
//             >
//               Accueil
//             </Button>
//             <Button
//               id="basic-button"
//               aria-controls={open ? "basic-menu" : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleOpenProposdenous}
//               sx={{ color: "#176B87" }}
//             >
//               À propos de nous
//             </Button>
//             <Menu
//               id="basic-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               onClick={handleOpenProposdenous}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             ></Menu>
//             {/*  Creation la bouton patisserie  */}

//             <Button
//               onClick={handleContact}
//               sx={{
//                 my: 2,
//                 color: "#176B87",
//                 display: "block",
//                 justifyContent: "center",
//               }}
//             >
//               Contact
//             </Button>
//             <Button
//               onClick={handleDevis}
//               sx={{
//                 my: 2,
//                 color: "#176B87",
//                 display: "block",
//                 justifyContent: "center",
//               }}
//             >
//               Obtenir une estimation
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Navbar;
