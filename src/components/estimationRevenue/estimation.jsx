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
import { Helmet } from "react-helmet";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const steps = [
  "Adresse mail",
  "Type d'hébergement",
  "Type de résidence",
  "Détails du logement",
  "Adresse du bien",
];

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
      </Box>
      <Box>
        <IconButton onClick={() => onChange(-1)} disabled={value <= min}>
          <RemoveIcon />
        </IconButton>
        <Typography component="span" sx={{ mx: 2, fontWeight: "bold" }}>
          {value}
        </Typography>
        <IconButton onClick={() => onChange(1)}>
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCounterChange = (field, delta) => {
    setForm((prev) => {
      const newValue = prev[field] + delta;
      return { ...prev, [field]: newValue < 0 ? 0 : newValue };
    });
  };

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
        if (form.voyageurs <= 0) return "Nombre de voyageurs invalide.";
        if (form.lits <= 0) return "Nombre de lits invalide.";
        if (form.chambres < 0)
          return "Veuillez indiquer le nombre de chambres.";
        if (form.sallesDeBain <= 0) return "Nombre de salles de bain invalide.";
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
        title: "Erreur",
        text: error,
      });
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📩 Email : ${form.addressMail}  
🏠 Type : ${form.type}  
🔑 Sous-type : ${form.typeRes}  
👥 Voyageurs : ${form.voyageurs}  
🛏 Chambres : ${form.chambres}  
🛋️ Lits : ${form.lits}  
🛁 Salles de bain : ${form.sallesDeBain}  
📍 Adresse : ${form.address}
`;

    emailjs
      .send(
        "service_9jv2w64",
        "template_qhmuaoj",
        {
          addressMail: form.addressMail,
          type: form.type,
          typeRes: form.typeRes,
          voyageurs: form.voyageurs,
          chambres: form.chambres,
          lits: form.lits,
          sallesDeBain: form.sallesDeBain,
          address: form.address,
          message,
        },
        "zC_-yk_KfML4WY-pT"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Estimation envoyée",
          text: "Nous vous contacterons bientôt.",
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
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "L'envoi a échoué. Veuillez réessayer.",
        });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          mx: "auto",
          px: 2,
          py: 4,
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          minHeight: "100%",
        }}
      >
        {" "}
        <Helmet>
          <title>Estimation Airbnb | Conciergerie Nice</title>
          <meta
            name="description"
            content="Estimez vos revenus Airbnb avec notre formulaire interactif. Rapide, simple, gratuit et sans engagement."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
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
            <form onSubmit={handleSubmit}>
              {activeStep === 0 && (
                <TextField
                  fullWidth
                  label="Adresse mail"
                  name="addressMail"
                  value={form.addressMail}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
              )}

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
                  <MenuItem value="principale">Principale</MenuItem>
                  <MenuItem value="secondaire">Secondaire</MenuItem>
                </TextField>
              )}

              {activeStep === 3 && (
                <Box mt={2}>
                  <Counter
                    label="Voyageurs"
                    value={form.voyageurs}
                    onChange={(delta) =>
                      handleCounterChange("voyageurs", delta)
                    }
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

              <Box mt={3} display="flex" justifyContent="space-between">
                {activeStep > 0 && (
                  <Button onClick={handleBack} variant="outlined">
                    Retour
                  </Button>
                )}
                {activeStep < steps.length - 1 ? (
                  <Button onClick={handleNext} variant="contained">
                    Suivant
                  </Button>
                ) : (
                  <Button type="submit" variant="contained">
                    Envoyer l’estimation
                  </Button>
                )}
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

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
//   IconButton,
// } from "@mui/material";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import Swal from "sweetalert2";
// import emailjs from "emailjs-com";

// const steps = [
//   "Adresse mail",
//   "Type d'hébergement",
//   "Type de résidence",
//   "Détails du logement",
//   "Adresse du bien",
// ];

// function Counter({ label, value, onChange, min = 0 }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         mb: 2,
//         flexWrap: "wrap",
//       }}
//     >
//       <Box sx={{ minWidth: "120px" }}>
//         <Typography variant="subtitle1">{label}</Typography>
//         <Typography variant="caption" color="text.secondary">
//           {value} {label.toLowerCase()}
//         </Typography>
//       </Box>
//       <Box>
//         <IconButton
//           aria-label={`Réduire ${label}`}
//           onClick={() => onChange(-1)}
//           disabled={value <= min}
//           size="large"
//         >
//           <RemoveIcon />
//         </IconButton>
//         <Typography
//           component="span"
//           sx={{ mx: 2, fontWeight: "bold", fontSize: "1.25rem" }}
//         >
//           {value}
//         </Typography>
//         <IconButton
//           aria-label={`Augmenter ${label}`}
//           onClick={() => onChange(1)}
//           size="large"
//         >
//           <AddIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }

// export default function EstimationPage() {
//   const [activeStep, setActiveStep] = useState(0);

//   const [form, setForm] = useState({
//     addressMail: "",
//     type: "",
//     typeRes: "",
//     voyageurs: 1,
//     chambres: 0,
//     lits: 1,
//     sallesDeBain: 1,
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCounterChange = (field, delta) => {
//     setForm((prev) => {
//       const newValue = prev[field] + delta;
//       return { ...prev, [field]: newValue < 0 ? 0 : newValue };
//     });
//   };

//   const validateStep = () => {
//     switch (activeStep) {
//       case 0:
//         if (!form.addressMail.trim())
//           return "Veuillez entrer une adresse mail valide.";
//         if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.addressMail.trim())
//         )
//           return "Adresse mail invalide.";
//         return null;

//       case 1:
//         if (!form.type) return "Veuillez sélectionner un type d'hébergement.";
//         return null;

//       case 2:
//         if (!form.typeRes) return "Veuillez sélectionner un type de résidence.";
//         return null;

//       case 3:
//         if (form.voyageurs <= 0)
//           return "Veuillez indiquer le nombre de voyageurs.";
//         if (form.lits <= 0) return "Veuillez indiquer le nombre de lits.";
//         if (form.sallesDeBain <= 0)
//           return "Veuillez indiquer le nombre de salles de bain.";
//         return null;

//       case 4:
//         if (!form.address.trim()) return "Veuillez entrer l'adresse du bien.";
//         return null;

//       default:
//         return null;
//     }
//   };

//   const handleNext = () => {
//     const error = validateStep();
//     if (error) {
//       Swal.fire({
//         icon: "warning",
//         title: "Erreur de validation",
//         text: error,
//         confirmButtonText: "OK",
//       });
//       return;
//     }
//     if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep((prev) => prev - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !form.addressMail.trim() ||
//       !form.type ||
//       !form.typeRes ||
//       form.voyageurs <= 0 ||
//       form.lits <= 0 ||
//       form.sallesDeBain <= 0 ||
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
//       voyageurs: form.voyageurs.toString(),
//       chambres: form.chambres.toString(),
//       lits: form.lits.toString(),
//       sallesDeBain: form.sallesDeBain.toString(),
//       propertyAddress: form.address, // **IMPORTANT: changer ici**
//     };

//     console.log("templateParams", templateParams);

//     emailjs
//       .send("service_9jv2w64", "template_qhmuaoj", templateParams, "zC_-yk_KfML4WY-pT")
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
//           voyageurs: 1,
//           chambres: 0,
//           lits: 1,
//           sallesDeBain: 1,
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
//       maxWidth="600px"
//       mx="auto"
//       p={2}
//       sx={{ width: "100%", boxSizing: "border-box" }}
//     >
//       <Typography variant="h4" align="center" gutterBottom>
//         Estimez vos revenus Airbnb
//       </Typography>

//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <Card sx={{ mt: 3 }}>
//         <CardContent>
//           <form onSubmit={handleSubmit} noValidate>
//             {activeStep === 0 && (
//               <TextField
//                 fullWidth
//                 label="Votre adresse mail"
//                 name="addressMail"
//                 type="email"
//                 value={form.addressMail}
//                 onChange={handleChange}
//                 margin="normal"
//                 required
//               />
//             )}

//             {activeStep === 1 && (
//               <TextField
//                 select
//                 fullWidth
//                 label="Type d'hébergement"
//                 name="type"
//                 value={form.type}
//                 onChange={handleChange}
//                 margin="normal"
//                 required
//               >
//                 <MenuItem value="">Sélectionner</MenuItem>
//                 <MenuItem value="Appartement">Appartement</MenuItem>
//                 <MenuItem value="Maison">Maison</MenuItem>
//                 <MenuItem value="Villa">Villa</MenuItem>
//                 <MenuItem value="Studio">Studio</MenuItem>
//                 <MenuItem value="Chambre privée">Chambre privée</MenuItem>
//               </TextField>
//             )}

//             {activeStep === 2 && (
//               <TextField
//                 select
//                 fullWidth
//                 label="Type de résidence"
//                 name="typeRes"
//                 value={form.typeRes}
//                 onChange={handleChange}
//                 margin="normal"
//                 required
//               >
//                 <MenuItem value="">Sélectionner</MenuItem>
//                 <MenuItem value="Résidence principale">
//                   Résidence principale
//                 </MenuItem>
//                 <MenuItem value="Résidence secondaire">
//                   Résidence secondaire
//                 </MenuItem>
//                 <MenuItem value="Location meublée">
//                   Location meublée
//                 </MenuItem>
//               </TextField>
//             )}

//             {activeStep === 3 && (
//               <>
//                 <Counter
//                   label="Voyageurs"
//                   value={form.voyageurs}
//                   onChange={(delta) => handleCounterChange("voyageurs", delta)}
//                   min={1}
//                 />
//                 <Counter
//                   label="Chambres"
//                   value={form.chambres}
//                   onChange={(delta) => handleCounterChange("chambres", delta)}
//                 />
//                 <Counter
//                   label="Lits"
//                   value={form.lits}
//                   onChange={(delta) => handleCounterChange("lits", delta)}
//                   min={1}
//                 />
//                 <Counter
//                   label="Salles de bain"
//                   value={form.sallesDeBain}
//                   onChange={(delta) => handleCounterChange("sallesDeBain", delta)}
//                   min={1}
//                 />
//               </>
//             )}

//             {activeStep === 4 && (
//               <TextField
//                 fullWidth
//                 label="Adresse du bien"
//                 name="address"
//                 value={form.address}
//                 onChange={handleChange}
//                 margin="normal"
//                 required
//                 multiline
//                 minRows={2}
//               />
//             )}

//             <Box
//               mt={3}
//               display="flex"
//               justifyContent="space-between"
//               flexWrap="wrap"
//               gap={2}
//             >
//               {activeStep > 0 && (
//                 <Button
//                   variant="outlined"
//                   onClick={handleBack}
//                   fullWidth={window.innerWidth < 480}
//                 >
//                   Retour
//                 </Button>
//               )}
//               {activeStep < steps.length - 1 ? (
//                 <Button
//                   variant="contained"
//                   onClick={handleNext}
//                   fullWidth={window.innerWidth < 480}
//                 >
//                   Suivant
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   type="submit"
//                   fullWidth={window.innerWidth < 480}
//                 >
//                   Estimer
//                 </Button>
//               )}
//             </Box>
//           </form>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }
