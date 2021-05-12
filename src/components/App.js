import { ThemeProvider } from "@material-ui/styles/"
import { Theme } from './UI/Theme'
import Header from './UI/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Links } from './Utils/Links'
import { Footer } from './UI/Footer'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={Links.home} component={() => <div>home</div>}/>
          <Route exact path={Links.services} component={() => <div>services</div>}/>
          <Route exact path={Links.revolution} component={() => <div>revolution</div>}/>
          <Route exact path={Links.about} component={() => <div>about</div>} />
          <Route exact path={Links.contact} component={() => <div>contact</div>}/>
          <Route exact path={Links.estimate} component={() => <div>estimate</div>}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>  
  );
}

export default App;
