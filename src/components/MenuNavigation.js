import React from 'react'
import '../styles/config.css'
import '../styles/MenuNavigation.css'
import {Logout, DocumentUpload, Copy} from 'grommet-icons';
import { Link } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions/actionLogin';
import { useDispatch, useSelector } from 'react-redux';



export const MenuNavigation = () => {


 
  const user = useSelector ((state) => {return state.login.user});
console.log(user, 'ttt')
   
    const dispatch = useDispatch()
  
    const handleLogout =()=>{
       dispatch(logoutInitiate())
    }


  return (
    <>
    <ul className='menu'>
      <li><Link to='/activeProcesses' className='menu__item'><Copy size='large' /><label className='ms-3'>Procesos Activos</label></Link></li>
      <li><Link to='/' className='menu__item'><DocumentUpload size='large'/><label className='ms-3'>Sube tus Procesos</label></Link></li>
      <li><Link to='/assignedProcesses' className='menu__item'><Copy size='large' /><label className='ms-3'>Procesos Asignados</label></Link></li>
      <li onClick={handleLogout}><Link to='/' className='menu__item menu-logout'><Logout size='large'/><label className='ms-3'>Salir</label></Link></li>
    
      {/* <Link to={'${user ? "/" : "/logout"}'} className="header-link">
          <div onClick={handleLogout} className="header-option"><Logout size='smart'/>
            <span className="header-option1">Hello, {user ? user.email : "guest"}</span>
            <span className="header-option2">{user ? "Sign out" : "Sign in"}</span>
          </div>
        </Link> */}
   
    </ul>
    </>
  )
}
