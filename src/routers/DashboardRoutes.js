import { Navigate, Route, Routes } from "react-router-dom";
import { ActiveProcesses } from "../components/ActiveProcesses";
import { AddProcess } from "../components/AddProcess";
import { MenuNavigation } from "../components/MenuNavigation";
import { NavBar } from "../components/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <MenuNavigation />
      <Routes>
        <Route path="/activeProcesses" element={<ActiveProcesses />} />
        {/* <Route path="/addProcess" element={<AddProcess/>}/>  */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
