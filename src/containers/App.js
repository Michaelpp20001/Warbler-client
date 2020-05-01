import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from "jwt-decode";

const store = configureStore();

// rehydration: idea of if the server went down or page refreshes
// we can see if there is a token in local storage
// then we can repopulate with the information from that token
// to set all the future headers
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">
            <Navbar />
            <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
