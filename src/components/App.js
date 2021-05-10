import { ThemeProvider } from "@material-ui/styles/"
import { Theme } from './UI/Theme'
import Header from './UI/Header'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      Hello!
    </ThemeProvider>  
  );
}

export default App;
