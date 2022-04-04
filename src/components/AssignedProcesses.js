import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProcessAsync } from '../redux/actions/actionProcess';
import '../styles/StyleAssignedProcesses.css'
import { MenuNavigation } from './MenuNavigation';
import { NavBar } from './NavBar';


export const AssignedProcesses = () => {
  const dispatch = useDispatch();

  const {process} = useSelector(store => store.process)

  useEffect(() => {
    dispatch(listProcessAsync())
  }, [dispatch])

  return (
    <>
        <NavBar/>
      <MenuNavigation/>
    <div className="containerAdd">
      <div>
        <h2 className='title__section'>Procesos Asignados</h2>
      </div>
      <p>Mira aquí los procesos que te han sido asignados</p>
      <section className='contaner__list'>
      {process.map((item , index) =>(  
        <ul key={index}>
          <li className='list__assigned' >
            <p className='item__assigned mx-5'>
            <span className='primary h4'>Proceso:</span>{item.nombre}
            <br/>
            <span className='mx-2 h4'>N°:</span>{item.id}</p>
            <Link to={`/detailProcess/${item.id}`}>   
            <button className="btn__process--assigned">Ver</button>
            </Link>
          </li>
        </ul>
         ))}
      </section>
    </div>
  </>
  )
}
