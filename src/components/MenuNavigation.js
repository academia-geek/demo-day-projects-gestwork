import React from 'react'
import '../styles/config.css'
import '../styles/MenuNavigation.css'
import {Logout, DocumentUpload, Copy} from 'grommet-icons';
import { Link } from 'react-router-dom';


export const MenuNavigation = () => {
  return (
    <ul className='menu'>
      <li><Link to='/activeProcesses' className='menu__item'><Copy size='large' />Procesos Activos</Link></li>
      <li><Link to='/' className='menu__item'><DocumentUpload size='large'/>Sube tu Procesos</Link></li>
      <li><Link to='/assignedProcesses' className='menu__item'><Copy size='large' />Procesos Asignados</Link></li>
      <li><Link to='/' className='menu__item'><Logout size='large' />Salir</Link></li>
    </ul>
  )
}
