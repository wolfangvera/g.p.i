import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AouthLayout from './layouts/AouthLayout.js';
import PrivateLayout from './layouts/PrivateLayout.js';
import PublicLayout from './layouts/PublicLayout.js';
import InicioSesion from './pages/InicioSesion.js';
import Registro from './pages/Registro.js';
import Index from './pages/Index.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/InicioSesion', '/Registro']}>
          <AouthLayout>
            <Switch>
              <Route path='/InicioSesion'>
                <InicioSesion />
              </Route>
              <Route path='/Registro'>
                <Registro />
              </Route>
            </Switch>
          </AouthLayout>
        </Route>
        {/* <Route>
          <PrivateLayout>
          </PrivateLayout>
        </Route> */}
        <Route path={['/']}>
          <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;