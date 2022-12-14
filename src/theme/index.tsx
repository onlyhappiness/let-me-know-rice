import { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

export default ({ children }: { children: any }) => {
  const themeOptions = useMemo(() => ({}), []);

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
