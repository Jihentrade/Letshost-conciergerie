import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const EstimationPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    addressMail: "",
    type: "",
    typeRes: "",
    rooms: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     addressMail: form.addressMail,
  //     type: form.type,
  //     typeRes: form.typeRes,
  //     rooms: form.rooms,
  //     address: form.address,
  //   };

  //   emailjs
  //     .send(
  //       "service_0p51h9d",
  //       "template_12dbgds",
  //       templateParams,
  //       "zC_-yk_KfML4WY-pT"
  //     )
  //     .then(() => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Email envoyé !",
  //         text: "Votre estimation a bien été envoyée. Nous vous contacterons bientôt.",
  //         confirmButtonText: "OK",
  //       });
  //       setForm({
  //         addressMail: "",
  //         type: "",
  //         typeRes: "",
  //         rooms: "",
  //         address: "",
  //       });
  //       setStep(1);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur d'envoi :", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Erreur",
  //         text: "Une erreur s'est produite lors de l'envoi de l'email.",
  //         confirmButtonText: "Réessayer",
  //       });
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs requis
    if (
      !form.addressMail.trim() ||
      !form.type ||
      !form.typeRes ||
      !form.rooms ||
      !form.address.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Champs manquants",
        text: "Veuillez remplir tous les champs avant de soumettre.",
        confirmButtonText: "OK",
      });
      return;
    }

    const templateParams = {
      addressMail: form.addressMail,
      type: form.type,
      typeRes: form.typeRes,
      rooms: form.rooms,
      address: form.address,
    };

    emailjs
      .send(
        "service_9jv2w64",
        "template_qhmuaoj",
        templateParams,
        "zC_-yk_KfML4WY-pT"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Email envoyé !",
          text: "Votre estimation a bien été envoyée. Nous vous contacterons bientôt.",
          confirmButtonText: "OK",
        });
        setForm({
          addressMail: "",
          type: "",
          typeRes: "",
          rooms: "",
          address: "",
        });
        setStep(1);
      })
      .catch((error) => {
        console.error("Erreur d'envoi :", error);
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Une erreur s'est produite lors de l'envoi de l'email.",
          confirmButtonText: "Réessayer",
        });
      });
  };

  return (
    <Box maxWidth="500px" mx="auto" p={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Estimez vos revenus Airbnb
      </Typography>
      <Card>
        <CardContent>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <TextField
                fullWidth
                label="Votre adresse mail"
                name="addressMail"
                value={form.addressMail}
                onChange={handleChange}
                margin="normal"
                required
              />
            )}
            {step === 2 && (
              <TextField
                select
                fullWidth
                label="Type d'hébergement"
                name="type"
                value={form.type}
                onChange={handleChange}
                margin="normal"
                required
              >
                <MenuItem value="">Sélectionner</MenuItem>
                <MenuItem value="Appartement">Appartement</MenuItem>
                <MenuItem value="Maison">Maison</MenuItem>
                <MenuItem value="Villa">Villa</MenuItem>
                <MenuItem value="Studio">Studio</MenuItem>
                <MenuItem value="Chambre privée">Chambre privée</MenuItem>
              </TextField>
            )}
            {step === 3 && (
              <TextField
                select
                fullWidth
                label="Type de résidence"
                name="typeRes"
                value={form.typeRes}
                onChange={handleChange}
                margin="normal"
                required
              >
                <MenuItem value="">Sélectionner</MenuItem>
                <MenuItem value="principale">Résidence principale</MenuItem>
                <MenuItem value="secondaire">Résidence secondaire</MenuItem>
              </TextField>
            )}
            {step === 4 && (
              <TextField
                fullWidth
                label="Nombre de chambres"
                name="rooms"
                type="number"
                value={form.rooms}
                onChange={handleChange}
                margin="normal"
                required
              />
            )}
            {step === 5 && (
              <TextField
                fullWidth
                label="Adresse du bien"
                name="address"
                value={form.address}
                onChange={handleChange}
                margin="normal"
                required
              />
            )}

            <Box mt={3} display="flex" justifyContent="space-between">
              {step > 1 && (
                <Button variant="outlined" onClick={handleBack}>
                  Retour
                </Button>
              )}
              {step < 5 ? (
                <Button variant="contained" onClick={handleNext}>
                  Suivant
                </Button>
              ) : (
                <Button variant="contained" type="submit">
                  Estimer
                </Button>
              )}
            </Box>
          </motion.form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EstimationPage;
