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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#007bff" }}>
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
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img src={logo} alt="Logo MonEntreprise - Agence immobilière à Nice" style={{ width: "85px" }} loading="lazy" />
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
                <Typography textAlign="center" sx={{ color: "#176B87" }}>Accueil</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/Aproposdenous" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ color: "#176B87" }}>À propos de nous</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ color: "#176B87" }}>Contact</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/obtenirUneEstimation" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ color: "#176B87" }}>Obtenir une estimation</Typography>
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
              <Button component={Link} to="/Aproposdenous" sx={{ my: 2, color: "#176B87" }}>
                À propos de nous
              </Button>
              <Button component={Link} to="/contact" sx={{ my: 2, color: "#176B87" }}>
                Contact
              </Button>
              <Button component={Link} to="/obtenirUneEstimation" sx={{ my: 2, color: "#176B87" }}>
                Obtenir une estimation
              </Button>
            </Box>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
