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
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      type: form.type,
      typeRes: form.typeRes,
      rooms: form.rooms,
      address: form.address,
      addressMail: form.addressMail,
    };

    emailjs
      .send(
        "service_2544f3s",
        "template_gqp3lsp",
        templateParams,
        "zC_-yk_KfML4WY-pT"
      )

      .then(
        () => {
          alert(` Email envoyé avec succès !`);
        },
        (err) => {
          console.error("Erreur d'envoi :", err);
          alert("Erreur lors de l'envoi de l'email.");
        }
      );
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
              {step < 4 ? (
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
