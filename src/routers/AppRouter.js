import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Login } from "../components/Login";
import { SingUp } from "../components/Register/SingUp";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute  from "../routers/PublicRoute"
import { useEffect, useState } from "react";

function AppRouter() {
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
      const auth = getAuth();
      return onAuthStateChanged(auth, (user)=>{
          console.log(user);
      if(user?.uid){
          setIsLoggedIn(true)
      }
      else{
          setIsLoggedIn(false)
      }
      setChecking(false)
  })
  }, [])
 
  
  if(checking) {
      return (
          <h1>Espere...</h1>
      )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <SingUp />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
