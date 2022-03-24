import { Navigate, Route, Routes } from "react-router-dom";
import { AddProcess } from "../components/uploadProcess/AddProcess";
import { MenuNavigation } from "../components/MenuNavigation";
import { NavBar } from "../components/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <MenuNavigation />
      <Routes>
        <Route path="/addProcess" element={<AddProcess />} />
        {/* <Route path="/addProcess" element={<AddProcess/>}/>  */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
