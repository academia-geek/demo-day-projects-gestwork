import React from "react";
// import "../styles/config.css";
import "../styles/MenuNavigation.css";
import { Logout, DocumentUpload, Copy } from "grommet-icons";
import { Link } from "react-router-dom";
import { logoutInitiate } from "../redux/actions/actionLogin";
import { useDispatch, useSelector } from "react-redux";
import { AddProcess } from "./uploadProcess/AddProcess";

export const MenuNavigation = () => {
  const user = useSelector((state) => {
    return state.login.user;
  });
  console.log(user, "ttt");

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutInitiate());
  };

  return (
    // <ul className='menu'>
    //   <li><Link to='/' className='menu__item'><DocumentUpload size='large'/></Link></li>

    //   <Link to={'${user ? "/" : "/logout"}'} className="header-link">
    //       <div onClick={handleLogout} className="header-option"><Logout size='smart'/>
    //         <span className="header-option1">Hello, {user ? user.email : "guest"}</span>
    //         <span className="header-option2">{user ? "Sign out" : "Sign in"}</span>
    //       </div>
    //     </Link>

    // </ul>

    // <div className="Content">
    //   <aside className='row flex-nowrap'>
    //     <div className="top col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" >

    //     <div className="sidebar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    //       <Link to="/activeProcesses" className="link active">
    //         <span className="material-icons-sharp">grid view</span>
    //         <h3>Procesos Activos </h3>
    //       </Link>
    //       <Link to="/assignedProcesses" className="link">
    //         <span className="material-icons-sharp">grid view</span>
    //         <h3>Sube tu Procesos </h3>
    //       </Link>

    //       <Link to={'${user ? "/" : "/logout"}'} className="link">
    //         <div onClick={handleLogout} className="header-option">
    //           <span className="material-icons-sharpa">grid view</span>
    //           <h3> {user ? "Salir" : "Sign in"} </h3>
    //         </div>
    //       </Link>
    //     </div>
    //     </div>

    //   </aside>

    //   <AddProcess />
    //   {/* <div className="right">
    //     <div className="top">
    //       <button className="menu-btn">
    //         <span class="material-icons-outlined">menu</span>
    //       </button>
    //       <div className="theme-toggler">

    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    <nav className="">
      <div className="row">
        <div className="col-auto bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link to="/activeProcesses" className="nav-link align-middle px-0">
                  
                  <span className="ms-1 d-none d-sm-inline">Procesos Activos</span>
                </Link>
              </li>
              <li>
                <div >
                  <Link to="/DocumentUpload" className="nav-link px-0 align-middle"><Logout/>
                    <span className="ms-1 d-none d-sm-inline">Sube tu Procesos</span>
                  </Link>
                </div>
              </li>
            </ul>
            <div className="dropdown pb-4">
              {" "}
              <Link
                to="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Logout/>
                <span className="d-none d-sm-inline mx-1">loser</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
