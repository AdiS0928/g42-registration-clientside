import React, { createContext, useReducer} from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Signup from "./components/Signup/Signup";
import Success from "./components/Success/Success";
import Errorpage from "./components/Errorpage/Errorpage";
import {initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route exact path="/success" element={<Success />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Routing />
      </UserContext.Provider>
    </>
  )
}
export default App
