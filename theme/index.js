import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
  components: {},
  mode: "dark",
});

export const RNEThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
