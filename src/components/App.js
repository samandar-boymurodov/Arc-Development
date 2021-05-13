import React from 'react'
import { ThemeProvider } from "@material-ui/styles/"
import { Theme } from './UI/Theme'
import Header from './UI/Header'
import LandingPage from './LandingPage'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Links } from './Utils/Links'
import { Footer } from './UI/Footer'

function App() {
  const [tab, setTab] = React.useState(0)
  const [serviceOp, setServiceOp] = React.useState()

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header tab={tab} setTab={setTab} serviceOp={serviceOp} setServiceOp={setServiceOp} />
        <Switch>
          <Route exact path={Links.home} component={LandingPage}/>
          <Route exact path={Links.services} component={() => <div>services</div>}/>
          <Route exact path={Links.revolution} component={() => <div>revolution</div>}/>
          <Route exact path={Links.about} component={() => <div>about</div>} />
          <Route exact path={Links.contact} component={() => <div>contact</div>}/>
          <Route exact path={Links.estimate} component={() => <div>estimate</div>}/>
        </Switch>
        <Footer tab={tab} setTab={setTab} serviceOp={serviceOp} setServiceOp={setServiceOp}/>
      </BrowserRouter>
    </ThemeProvider>  
  );
}

export default App;
