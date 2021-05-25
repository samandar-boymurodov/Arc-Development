import React from "react";
import { ThemeProvider } from "@material-ui/styles/";
import { Theme } from "./UI/Theme";
import Header from "./UI/Header";
import LandingPage from "./LandingPage";
import { Services } from "./Services";
import { CustomSofware } from "./CustomSoftware";
import { MobileApps } from "./MobileApps";
import { WebDev } from "./WebDev";
import { Revolution } from "./Revolution";
import { About } from "./About";
import { Contact } from "./contact.js";
import { Estimate } from "./Estimate.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Links } from "./Utils/Links";
import { Footer } from "./UI/Footer";

function App() {
  const [tab, setTab] = React.useState(0);
  const [serviceOp, setServiceOp] = React.useState();

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header
          tab={tab}
          setTab={setTab}
          serviceOp={serviceOp}
          setServiceOp={setServiceOp}
        />
        <Switch>
          <Route exact path={Links.home} component={LandingPage} />
          <Route exact path={Links.services} component={Services} />
          <Route exact path={Links.revolution} component={Revolution} />
          <Route exact path={Links.about} component={About} />
          <Route exact path={Links.contact} component={Contact} />
          <Route exact path={Links.estimate} component={Estimate} />
          <Route exact path={Links.customsofware} component={CustomSofware} />
          <Route exact path={Links.mobiledevelopment} component={MobileApps} />
          <Route exact path={Links.websitedevelopment} component={WebDev} />
        </Switch>
        <Footer
          tab={tab}
          setTab={setTab}
          serviceOp={serviceOp}
          setServiceOp={setServiceOp}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
