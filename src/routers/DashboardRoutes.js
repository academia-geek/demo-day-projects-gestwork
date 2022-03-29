import { Navigate, Route, Routes } from "react-router-dom";
import { AddProcess } from "../components/uploadProcess/AddProcess";
import { MenuNavigation } from "../components/MenuNavigation";
import { NavBar } from "../components/NavBar";
import { ActiveProcesses } from "../components/ActiveProcesses";
import {ProcessInformation} from "../components/ProcessInformation";
import {AssignedProcesses} from "../components/AssignedProcesses";
import {Profile} from "../components/Profile";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <MenuNavigation />
      <Routes>
        <Route path="/*" element={<AddProcess />} />
        <Route path="/activeProcesses" element={<ActiveProcesses/>}/> 
        <Route path="/assignedProcesses" element={<AssignedProcesses/>}/> 
        <Route path="/processInformation" element={<ProcessInformation/>}/> 
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/" element={<Navigate to="/addProcess" />} />
      </Routes>
    </>
  );
};
