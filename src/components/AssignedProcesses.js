import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProcessAsync } from '../redux/actions/actionProcess';

export const AssignedProcesses = () => {
  const dispatch = useDispatch();

  const {process} = useSelector(store => store.process)
  console.log(process)

  useEffect(() => {
    dispatch(listProcessAsync())
  }, [dispatch])

  return (
    <>
    <div className="containerAdd">
      <div>
        <h2 className='title__section'>Procesos Asignados</h2>
      </div>
      <p>Mira aquí los procesos que te han sido asignados</p>
      <section>
      {process.map((item , index) =>(  
        <ul key={index}>
          <li className='d-flex' >
            <p className='item__assigned mx-5'>
            <span className='primary h4'>Proceso:</span>{item.nombre}
            <br/>
            <span className='mx-2 h4'>N°:</span>{item.id}</p>   
            <button className="btn__process"><Link to="/detailProcess">Ver</Link></button>
          </li>
        </ul>
         ))}
      </section>
    </div>
  </>
  )
}
