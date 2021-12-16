import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import "./App.css";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Component1 from "./components/Component1";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import TableTest from "./components/TableTest";
import Select from "./components/Select";
import Countries from "./components/Countries";
import Register from "./components/Register";
import Suma from './components/Suma'
import TableCountries from "./components/TableCountries";

function App() {
  const { isLogin } = useContext(AuthContext);
  const auth = isLogin();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {auth ? (
            <Route
              path="/private"
              element={
                <Base>
                  <Component1 num={"private"} />
                </Base>
              }
            />
          ) : (
            <Route
              path="/public"
              element={
                <Base>
                  <Component1 num={"public"} />
                </Base>
              }
            />
          )}
          <Route
            path="/login"
            element={
              <Base>
                <Login />
              </Base>
            }
          />
          <Route path='/table' element={<TableTest/>} />
          <Route path='/select' element={<Select/>} />
          <Route path='/countries' element={<Countries/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/suma' element={<Suma/>} />
          <Route path='/tableCountries' element={<TableCountries/>} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
