import React from 'react'
import {Trash } from 'grommet-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProcessoAsync } from '../redux/actions/actionProcess';

export const AssignedProcesses = () => {
  const dispatch = useDispatch();

  const {process} = useSelector(store => store.process)
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
          <li className='item__assigned'>Proceso N° 45 <span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcessoAsync(item.number))}/> </span></li>
          <li className='item__assigned'>Proceso N° 31 <span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcessoAsync(item.number))}/> </span></li>
          <li className='item__assigned'>Proceso N° 45 <span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcessoAsync(item.number))}/> </span></li>
          <li className='item__assigned'>Proceso N° 52 <span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcessoAsync(item.number))}/> </span></li>
        </ul>
         ))}
      </section>
    </div>
  </>
  )
}
