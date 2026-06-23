import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TaskProvider } from "./providers/TaskContext.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </TaskProvider>
  </StrictMode>,
);
