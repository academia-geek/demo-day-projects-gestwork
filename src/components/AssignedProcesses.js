import React from 'react'
import {Trash } from 'grommet-icons';

export const AssignedProcesses = () => {
  return (
    <>
    <div className="containerAdd">
      <div>
        <h2 className='title__section'>Procesos Asignados</h2>
      </div>
      <p>Mira aquí los procesos que te han sido asignados</p>
      <section>
        <ul>
          <li className='item__assigned'>Proceso N° 45 <span className='item__assigned--link'><Trash color='plain' size='large' /> </span></li>
          <li className='item__assigned'>Proceso N° 31 <span className='item__assigned--link'><Trash color='plain' size='large' /> </span></li>
          <li className='item__assigned'>Proceso N° 45 <span className='item__assigned--link'><Trash color='plain' size='large' /> </span></li>
          <li className='item__assigned'>Proceso N° 52 <span className='item__assigned--link'><Trash color='plain' size='large' /> </span></li>
        </ul>
      </section>
    </div>
  </>
  )
}
