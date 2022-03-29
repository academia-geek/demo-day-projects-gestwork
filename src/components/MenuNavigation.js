import React from 'react'
import '../styles/config.css'
import '../styles/MenuNavigation.css'
import {Logout, DocumentUpload, Copy} from 'grommet-icons';
import { Link } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions/actionLogin';
import { useDispatch, useSelector } from 'react-redux';



export const MenuNavigation = () => {
 
  // const {user} = useSelector ((state) => state.data);

   
    const dispatch = useDispatch()
  
    // const handleLogout =()=>{
    //    dispatch(logoutInitiate())
    // }




  return (
    <ul className='menu'>
      <li><Link to='/activeProcesses' className='menu__item'><Copy size='large' />Procesos Activos</Link></li>
      <li><Link to='/assignedProcesses' className='menu__item'><DocumentUpload size='large'/>Sube tu Procesos</Link></li>
      {/* <li><Link to={'${user?"/": "logout"}'} className='menu__item'><Logout size='large' />
      
      <div onClick={handleLogout} className="header-option">
            <span className="header-option1">Hello, {user ? user.email : "guest"}</span>
            <span className="header-option2">{user ? "Sign out" : "Sign in"}</span>
          </div>
      
      </Link></li> */}
    </ul>
  )
}
