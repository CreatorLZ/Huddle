import { ThemeProvider } from "styled-components";
import Globalstyles from "./Globalstyles";
import Homepage from "./Pages/Homepage";

const theme = {
  colors:{
    footer:'#003333',
    body:'#fff'
  },
  font:{
    header:'Poppins',
    body:'Open sans'
  },
  mobile:'768px',
}



function App() {
  return (
  <ThemeProvider theme = {theme}>
    <>
      <Globalstyles />
      <Homepage />
      
      </>
      </ThemeProvider>
  );
}

export default App;
