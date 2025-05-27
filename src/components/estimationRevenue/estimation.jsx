// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   Stepper,
//   Step,
//   StepLabel,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// const steps = [
//   "Adresse mail",
//   "Type d'hébergement",
//   "Type de résidence",
//   "Nombre de chambres",
//   "Adresse",
// ];

// const EstimationPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <=600px

//   const [activeStep, setActiveStep] = useState(0);
//   const [form, setForm] = useState({
//     addressMail: "",
//     type: "",
//     typeRes: "",
//     rooms: "",
//     address: "",
//   });

//   const validateStep = (step) => {
//     switch (step) {
//       case 0:
//         return form.addressMail.trim() !== "";
//       case 1:
//         return form.type !== "";
//       case 2:
//         return form.typeRes !== "";
//       case 3:
//         return form.rooms !== "" && Number(form.rooms) > 0;
//       case 4:
//         return form.address.trim() !== "";
//       default:
//         return false;
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleNext = () => {
//     if (validateStep(activeStep)) {
//       if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
//     } else {
//       Swal.fire({
//         icon: "warning",
//         title: "Champs manquants",
//         text: "Veuillez remplir correctement le champ avant de continuer.",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep(activeStep - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation finale
//     if (
//       !form.addressMail.trim() ||
//       !form.type ||
//       !form.typeRes ||
//       !form.rooms ||
//       !form.address.trim()
//     ) {
//       Swal.fire({
//         icon: "warning",
//         title: "Champs manquants",
//         text: "Veuillez remplir tous les champs avant de soumettre.",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     const templateParams = {
//       addressMail: form.addressMail,
//       type: form.type,
//       typeRes: form.typeRes,
//       rooms: form.rooms,
//       address: form.address,
//     };

//     emailjs
//       .send(
//         "service_9jv2w64",
//         "template_qhmuaoj",
//         templateParams,
//         "zC_-yk_KfML4WY-pT"
//       )
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Email envoyé !",
//           text: "Votre estimation a bien été envoyée. Nous vous contacterons bientôt.",
//           confirmButtonText: "OK",
//         });
//         setForm({
//           addressMail: "",
//           type: "",
//           typeRes: "",
//           rooms: "",
//           address: "",
//         });
//         setActiveStep(0);
//       })
//       .catch((error) => {
//         console.error("Erreur d'envoi :", error);
//         Swal.fire({
//           icon: "error",
//           title: "Erreur",
//           text: "Une erreur s'est produite lors de l'envoi de l'email.",
//           confirmButtonText: "Réessayer",
//         });
//       });
//   };

//   return (
//     <Box
//       maxWidth="100%"
//       sx={{
//         px: { xs: 2, sm: 4 },
//         py: 4,
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "100%", sm: 600 },
//           boxShadow: 3,
//           borderRadius: 2,
//           bgcolor: "background.paper",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           align="center"
//           gutterBottom
//           sx={{ px: 2, pt: 2 }}
//         >
//           Estimez vos revenus Airbnb
//         </Typography>

//         {/* Stepper vertical on mobile for better readability */}
//         <Stepper
//           activeStep={activeStep}
//           alternativeLabel={!isMobile}
//           orientation={isMobile ? "vertical" : "horizontal"}
//           sx={{
//             px: { xs: 2, sm: 3 },
//             "& .MuiStepLabel-label": {
//               fontSize: isMobile ? "0.8rem" : "1rem",
//             },
//           }}
//         >
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         <Card elevation={0}>
//           <CardContent>
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {activeStep === 0 && (
//                 <TextField
//                   fullWidth
//                   label="Votre adresse mail"
//                   name="addressMail"
//                   value={form.addressMail}
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                   type="email"
//                   autoComplete="email"
//                 />
//               )}
//               {activeStep === 1 && (
//                 <TextField
//                   select
//                   fullWidth
//                   label="Type d'hébergement"
//                   name="type"
//                   value={form.type}
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                 >
//                   <MenuItem value="">Sélectionner</MenuItem>
//                   <MenuItem value="Appartement">Appartement</MenuItem>
//                   <MenuItem value="Maison">Maison</MenuItem>
//                   <MenuItem value="Villa">Villa</MenuItem>
//                   <MenuItem value="Studio">Studio</MenuItem>
//                   <MenuItem value="Chambre privée">Chambre privée</MenuItem>
//                 </TextField>
//               )}
//               {activeStep === 2 && (
//                 <TextField
//                   select
//                   fullWidth
//                   label="Type de résidence"
//                   name="typeRes"
//                   value={form.typeRes}
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                 >
//                   <MenuItem value="">Sélectionner</MenuItem>
//                   <MenuItem value="principale">Résidence principale</MenuItem>
//                   <MenuItem value="secondaire">Résidence secondaire</MenuItem>
//                 </TextField>
//               )}
//               {activeStep === 3 && (
//                 <TextField
//                   fullWidth
//                   label="Nombre de chambres"
//                   name="rooms"
//                   type="number"
//                   value={form.rooms}
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                   inputProps={{ min: 1 }}
//                 />
//               )}
//               {activeStep === 4 && (
//                 <TextField
//                   fullWidth
//                   label="Adresse du bien"
//                   name="address"
//                   value={form.address}
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                 />
//               )}

//               <Box
//                 mt={3}
//                 display="flex"
//                 flexDirection={isMobile ? "column" : "row"}
//                 justifyContent="space-between"
//                 gap={2}
//               >
//                 {activeStep > 0 && (
//                   <Button
//                     variant="outlined"
//                     onClick={handleBack}
//                     fullWidth={isMobile}
//                   >
//                     Retour
//                   </Button>
//                 )}
//                 {activeStep < steps.length - 1 ? (
//                   <Button
//                     variant="contained"
//                     onClick={handleNext}
//                     fullWidth={isMobile}
//                   >
//                     Suivant
//                   </Button>
//                 ) : (
//                   <Button
//                     variant="contained"
//                     type="submit"
//                     fullWidth={isMobile}
//                   >
//                     Estimer
//                   </Button>
//                 )}
//               </Box>
//             </motion.form>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default EstimationPage;
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const steps = [
  "Adresse mail",
  "Type d'hébergement",
  "Type de résidence",
  "Détails du logement",
  "Adresse du bien",
];

// Composant compteur générique
function Counter({ label, value, onChange, min = 0 }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Box>
        <Typography variant="subtitle1">{label}</Typography>
        <Typography variant="caption" color="text.secondary">
          {value} {label.toLowerCase()}
        </Typography>
      </Box>
      <Box>
        <IconButton
          aria-label={`Réduire ${label}`}
          onClick={() => onChange(-1)}
          disabled={value <= min}
          size="large"
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          component="span"
          sx={{ mx: 2, fontWeight: "bold", fontSize: "1.25rem" }}
        >
          {value}
        </Typography>
        <IconButton
          aria-label={`Augmenter ${label}`}
          onClick={() => onChange(1)}
          size="large"
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function EstimationPage() {
  const [activeStep, setActiveStep] = useState(0);

  const [form, setForm] = useState({
    addressMail: "",
    type: "",
    typeRes: "",
    voyageurs: 1,
    chambres: 0,
    lits: 1,
    sallesDeBain: 1,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gestion des compteurs multiples
  const handleCounterChange = (field, delta) => {
    setForm((prev) => {
      const newValue = prev[field] + delta;
      return { ...prev, [field]: newValue < 0 ? 0 : newValue };
    });
  };

  // Validation par étape
  const validateStep = () => {
    switch (activeStep) {
      case 0:
        if (!form.addressMail.trim())
          return "Veuillez entrer une adresse mail valide.";
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            form.addressMail.trim()
          )
        )
          return "Adresse mail invalide.";
        return null;

      case 1:
        if (!form.type) return "Veuillez sélectionner un type d'hébergement.";
        return null;

      case 2:
        if (!form.typeRes) return "Veuillez sélectionner un type de résidence.";
        return null;

      case 3:
        if (form.voyageurs <= 0)
          return "Veuillez indiquer le nombre de voyageurs.";
        if (form.lits <= 0) return "Veuillez indiquer le nombre de lits.";
        if (form.sallesDeBain <= 0)
          return "Veuillez indiquer le nombre de salles de bain.";
        return null;

      case 4:
        if (!form.address.trim()) return "Veuillez entrer l'adresse du bien.";
        return null;

      default:
        return null;
    }
  };

  const handleNext = () => {
    const error = validateStep();
    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Erreur de validation",
        text: error,
        confirmButtonText: "OK",
      });
      return;
    }
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const error = validateStep();
  //   if (error) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Erreur de validation",
  //       text: error,
  //       confirmButtonText: "OK",
  //     });
  //     return;
  //   }

  //   Swal.fire({
  //     icon: "success",
  //     title: "Formulaire envoyé !",
  //     text: "Merci pour votre demande d'estimation, nous vous contacterons bientôt.",
  //     confirmButtonText: "OK",
  //   });

  //   setForm({
  //     addressMail: "",
  //     type: "",
  //     typeRes: "",
  //     voyageurs: 1,
  //     chambres: 0,
  //     lits: 1,
  //     sallesDeBain: 1,

  //     address: "",
  //   });
  //   setActiveStep(0);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation finale
    if (
      !form.addressMail.trim() ||
      !form.type ||
      !form.typeRes ||
      form.voyageurs <= 0 ||
      form.lits <= 0 ||
      form.sallesDeBain <= 0 ||
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
      voyageurs: form.voyageurs.toString(),
      chambres: form.chambres.toString(),
      lits: form.lits.toString(),
      sallesDeBain: form.sallesDeBain.toString(),
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
          voyageurs: 1,
          chambres: 0,
          lits: 1,
          sallesDeBain: 1,

          address: "",
        });
        setActiveStep(0);
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
    <Box maxWidth="600px" mx="auto" p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Estimez vos revenus Airbnb
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            {/* Étape 1 - Email */}
            {activeStep === 0 && (
              <TextField
                fullWidth
                label="Votre adresse mail"
                name="addressMail"
                type="email"
                value={form.addressMail}
                onChange={handleChange}
                margin="normal"
                required
              />
            )}

            {/* Étape 2 - Type d'hébergement */}
            {activeStep === 1 && (
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

            {/* Étape 3 - Type de résidence */}
            {activeStep === 2 && (
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

            {/* Étape 4 - Détails du logement (voyageurs, chambres, lits, salles de bain) */}
            {activeStep === 3 && (
              <Box mt={2}>
                <Counter
                  label="Voyageurs"
                  value={form.voyageurs}
                  onChange={(delta) => handleCounterChange("voyageurs", delta)}
                  min={1}
                />
                <Counter
                  label="Chambres"
                  value={form.chambres}
                  onChange={(delta) => handleCounterChange("chambres", delta)}
                  min={0}
                />
                <Counter
                  label="Lits"
                  value={form.lits}
                  onChange={(delta) => handleCounterChange("lits", delta)}
                  min={1}
                />
                <Counter
                  label="Salles de bain"
                  value={form.sallesDeBain}
                  onChange={(delta) =>
                    handleCounterChange("sallesDeBain", delta)
                  }
                  min={1}
                />
              </Box>
            )}

            {/* Étape 5 - Adresse */}
            {activeStep === 4 && (
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

            {/* Navigation */}
            <Box
              mt={3}
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={1}
            >
              {activeStep > 0 && (
                <Button variant="outlined" onClick={handleBack}>
                  Retour
                </Button>
              )}
              {activeStep < steps.length - 1 ? (
                <Button variant="contained" onClick={handleNext}>
                  Suivant
                </Button>
              ) : (
                <Button variant="contained" type="submit">
                  Estimer
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
