import { Navigation } from "../components/Navigation";
import { Light } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home";
import { About } from "../components/sections/About";
import { RoadMap } from "../components/sections/RoadMap";
import { ShowCases } from "../components/sections/ShowCases";
import { Team } from "../components/sections/Team";
import { Preguntas } from "../components/sections/Preguntas";
import { Footer } from "../components/sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function MenuPrincipal() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <ShowCases />
        <Team />
        <Preguntas />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}
