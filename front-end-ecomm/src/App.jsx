import Header3 from "./components/header/Header3";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
//import IconSection from "./components/hero/IconSection";
export default function App() {
  const [theme, colorMode] = useMode();
  return (
   
    <ColorModeContext.Provider 

    
// @ts-ignore
    value={colorMode}>
<ThemeProvider 
// @ts-ignore
theme={theme}>
<CssBaseline />

<Header1 />
      <Header2/>
      <Header3/>

    <Box bgcolor={theme.
// @ts-ignore
    palette.bg.main}>
        
        <Hero />
        <Main></Main>
    </Box>
    <ScrollToTop></ScrollToTop>
   <Footer></Footer>
</ThemeProvider>

    </ColorModeContext.Provider>
     
     
    
  )
}
