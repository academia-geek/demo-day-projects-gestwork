import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProcessAsync } from '../redux/actions/actionProcess';

export const AssignedProcesses = () => {
  const dispatch = useDispatch();

  const {process} = useSelector(store => store.process)
  console.log(process)

  useEffect(() => {
    dispatch(listProcessAsync())
    console.log(process)
  },[])

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
          <li>
            <p className='item__assigned'>{item.nombre}{item.id}</p>   
            <button className="btn__process">Ver</button>
          </li>
        </ul>
         ))}
      </section>
    </div>
  </>
  )
}
