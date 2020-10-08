import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import {Header} from "./component/Header";
import './App.scss';
import {store} from "./store";
import { Provider } from "react-redux";
import Modal from "./component/Modal";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Modal />
            </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
