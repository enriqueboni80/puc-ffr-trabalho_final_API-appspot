import React from "react";
import CarsFilter from "./components/CarsFilter";
import Marcas from "./components/Marcas"
import Modelos from "./components/Modelos"
import AnosModelos from "./components/AnosModelos"
import Carro from "./components/Carro"
import CarrosFavoritos from "./components/CarrosFavoritos"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./global-styles.css"
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"

import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Nav />
            <div class="container">
              <Route exact path="/" component={Marcas} />
              <Route exact path="/marcas" component={Marcas} />
              <Route exact path="/filtro" component={CarsFilter} />
              <Route exact path="/carrosFavoritos" component={CarrosFavoritos} />
              <Route exact path="/marcas/:IdMarca/modelos/" component={Modelos} />
              <Route exact path="/marcas/:IdMarca/modelos/:IdModelo/anos" component={AnosModelos} />
              <Route exact path="/marcas/:IdMarca/modelos/:IdModelo/anos/:IdAno" component={Carro} />
            </div>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}
