import React, { useEffect } from 'react'
import {Trash } from 'grommet-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProcess, listProcessAsync } from '../redux/actions/actionProcess';

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
          <li className='item__assigned'>{item.name}{item.id}<span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcess(item.id))}/> </span></li>
          <li className='item__assigned'>{item.name}{item.id}<span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcess(item.id))}/> </span></li>
          <li className='item__assigned'>{item.name}{item.id}<span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcess(item.id))}/> </span></li>
          <li className='item__assigned'>{item.name}{item.id}<span className='item__assigned--link'><Trash className="icon__assigned" color='plain' size='large' onClick={()=> dispatch(deleteProcess(item.id))}/> </span></li>
        </ul>
         ))}
      </section>
    </div>
  </>
  )
}
