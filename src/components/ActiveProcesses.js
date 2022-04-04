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
import { NavBar } from "./NavBar";
import { MenuNavigation } from "./MenuNavigation";


export const ActiveProcesses = () => {

  const dispatch = useDispatch();


  const {process} = useSelector(store => store.process)
  

  useEffect(() => {
    dispatch(listProcessAsync())
  }, [dispatch])

  const editarProcess = (id) => {
    console.log(id);
    // const getProcess = process.find(item => item.id === id)
    // console.log(getProcess);
    // setSendData(getProcess);
  }

  return (
    <>
    <NavBar />
      <MenuNavigation />
      <div className="containerAdd">
        <div>
          <h2 className="title__section">Procesos Activos</h2>
       
       <div className=''>
        <SearchProcesses />
        </div>
        </div>
        <section className='d-flex flex-wrap align-content-around'>
        {process.map((item, index) => (
            <Card
              key={index}
              border="primary"
              className="card__process align-items-center" 
              style={{}}
            >
              <Card.Body className='col-12 container-fluid mt-1' >
                <div className="header__card">
                  <Card.Title className="d-flex col-sm-6">
                    <p className="item__assigned me-1 p-2 ">
                      <span className="primary h4">Proceso:</span>
                      {item.nombre}/<span className="mx-2 h4">N°:</span>
                      {item.id}
                    </p>
                  </Card.Title>
                  <div className='icons me-1 pt-4 row-sm-6'>
                    <Link to={`/editProcesses/${item.id}`}>
                      <span className="item__assigned--link float-start">
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648857762/GestWork/icons8-l%C3%A1piz-30_abusob.png"
                          alt="lapiz"
                          className="mb-5"
                          style={{width:"25px" , color:'red'}}
                        />
                      </span>
                    </Link>
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648857762/GestWork/icons8-basura-24_anbbqa.png"
                      alt="icondelete"
                      style={{width:"25px"}}
                      onClick={() => dispatch(deleteProcess(item.id))}
                    />
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
        {/* {detailData === true ? <EditProcesses editData={sendData}/> : "" } */}
      </div>
    </>
  );
};