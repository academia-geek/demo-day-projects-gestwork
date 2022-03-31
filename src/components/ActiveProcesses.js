import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import {Edit, Trash } from 'grommet-icons';
import { SearchProcesses } from "./SearchProcesses";
import '../styles/StyleActiveProcesses.css'
import '../styles/config.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProcess, deleteProcessAsync, editProcessAsync, listProcessAsync } from "../redux/actions/actionProcess";
import { Link } from "react-router-dom";
import EditProcesses from "./EditProcesses";
import DetailProcess from "./DetailProcess";


export const ActiveProcesses = () => {

  const dispatch = useDispatch();

  const [sendData, setSendData] = useState([]);
  const [detailData, setDetailData] = useState(false);
  const [inactiveProcess, setInactiveProcess] = useState([])

  const {process} = useSelector(store => store.process)
  

  useEffect(() => {
    dispatch(listProcessAsync())
  }, [dispatch])

  const editarProcess = (id) => {
    console.log(id);
    const getProcess = process.find(item => item.id === id)
    console.log(getProcess);
    setSendData(getProcess);
  }
  // console.log(sendData);

  // const disableProcess = (id) => {
  //   const getProcess = process.find(item => item.id === id)
  //   console.log(getProcess);
  //   setInactiveProcess(getProcess);
  // }
  // console.log(inactiveProcess)
  return (
    <>
      <div className="containerAdd">
        <div>
          <h2 className="title__section">Procesos Activos</h2>
        </div>
        <SearchProcesses />
        <section>
         {process.map((item, index) =>(
          <Card key={index} border="primary" className="card__process" style={{ width: "48rem" }}>
            <Card.Body>
              <div className="header__card">
                <Card.Title>
                <p className='item__assigned mx-5'>
                <span className='primary h4'>Proceso:</span>{item.nombre}/  
                <span className='mx-2 h4'>N°:</span>{item.id}</p> 
                </Card.Title>
                <div>
                  <Link to={'/editProcesses'}> 
                  <span className='item__assigned--link'>
                    <Edit className="icon__assigned" color='plain' onClick={()=> {editarProcess(item.id); setDetailData(true) }}/>
                  </span>
                  </Link>
                  <span className='item__assigned--link'>
                    {/* <Trash className="icon__assigned" color='plain' onClick={()=> dispatch(deleteProcessAsync(item.id))}/> */}
                    <Trash className="icon__assigned" color='plain' onClick={()=> dispatch(deleteProcess(item.id))}/>
                    {/* <Trash className="icon__assigned" color='plain' onClick={()=>{disableProcess(item.id)} }/> */}
                  </span>
                </div>
              </div>
              <Card.Text>
               {item.descripcion}
              </Card.Text>
              <Link to={`/detailProcess/${item.id}`}>
              <button className="btn__process">Ver</button>
              </Link>
            </Card.Body>
          </Card>
           ))}
        </section>
        {detailData === true ? <EditProcesses editData={sendData}/> : "" }
      </div>
    </>
  );
};