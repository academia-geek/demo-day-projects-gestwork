import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddProcess } from "../components/AddProcess";
import { Login } from "../components/Login";
import {SingUp} from "../components/Register/SingUp";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/login'
        element={
          <Login />}
          />
           <Route
        path='/register'
        element=
        {
        <SingUp/>}
          />
      <Route
        path='/addProcess'
        element=
        {
        <AddProcess/>}
          />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
