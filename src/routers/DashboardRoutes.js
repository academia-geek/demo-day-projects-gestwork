import { Navigate, Route, Routes } from "react-router-dom";
import { AddProcess } from "../components/uploadProcess/AddProcess";
import { MenuNavigation } from "../components/MenuNavigation";
import { NavBar } from "../components/NavBar";
import { ActiveProcesses } from "../components/ActiveProcesses";
import { ProcessInformation } from "../components/ProcessInformation";
import { AssignedProcesses } from "../components/AssignedProcesses";
import { Profile } from "../components/Profile";
import DetailProcess from "../components/DetailProcess";
import EditProcesses from "../components/EditProcesses";
import InitialMenu from "../components/menuinicial/InitialMenu";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <InitialMenu />
      <MenuNavigation />
      <Routes>
        {/* <Route path="/*" element={<InitialMenu/>} /> */}
        <Route path="/addp" element={<AddProcess />} />
        <Route path="/activeProcesses" element={<ActiveProcesses />} />
        <Route path="/assignedProcesses" element={<AssignedProcesses />} />
        <Route path="/detailProcess/:id" element={<DetailProcess />} />
        <Route path="/editProcesses/:id" element={<EditProcesses />} />
        <Route path="/processInformation" element={<ProcessInformation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addp" element={<Navigate to="/addp" />} />
      </Routes>
    </>
  );
};
