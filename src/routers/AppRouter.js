import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login";
import SingUp from "../components/SingUp";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path='/'
        element={
          <Login />}
          />
           <Route
        path='/register'
        element={
          <SingUp />}
          />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
