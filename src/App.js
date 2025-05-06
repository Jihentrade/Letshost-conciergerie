import { CssBaseline, ThemeProvider } from "@mui/material";
import RouterConfig from "./routes/routerConfig";
import theme from "./styles/theme";

import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <title>Letshost conciergerie</title>
        <link rel="icon" type="image/png" href="./assets/favicon.ico" />
      </Helmet>

      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
