import Header3 from "./components/header/Header3";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
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
</ThemeProvider>

    </ColorModeContext.Provider>
     
     
    
  )
}