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
import RegistroVenta from './pages/RegistroVenta.js';
import GestionarProducto from './pages/GestionarProducto';
import ModListarVentas from './pages/ModListarVentas';
import ModuloUsuario from './pages/ModuloUsuario';
import RegistroProductoF from './pages/RegistroProductoF';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/Index', '/InicioSesion', '/Registro']}>
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
          <AouthLayout>
          </AouthLayout>
        </Route> */}

        <Route path={['/RegistroVenta', '/RegistroProductoF', '/GestionarProducto', '/ModListarVentas', '/ModuloUsuario']}>
          <PrivateLayout>
            <Switch>
              <Route path='/RegistroVenta'>
                <RegistroVenta />
              </Route>
              <Route path='/RegistroProductoF'>
                <RegistroProductoF />
              </Route>
              <Route path='/ModListarVentas'>
                <ModListarVentas />
              </Route>
              <Route path='/GestionarProducto'>
                <GestionarProducto />
              </Route>
              <Route path='/ModuloUsuario'>
                <ModuloUsuario />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>





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