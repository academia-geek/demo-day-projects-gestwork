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
      <div className="containerAdd">
        <div>
          <h2 className="title__section">Procesos Activos</h2>
        </div>
        <SearchProcesses />
        <section>
        {process.map((item, index) => (
            <Card
              key={index}
              border="primary"
              className="card__process"
              style={{ width: "46.5rem" }}
            >
              <Card.Body>
                <div className="header__card">
                  <Card.Title>
                    <p className="item__assigned">
                      <span className="primary h4">Proceso:</span>
                      {item.nombre}/<span className="mx-2 h4">N°:</span>
                      {item.id}
                    </p>
                  </Card.Title>
                  <div>
                    <Link to={`/editProcesses/${item.id}`}>
                      <span className="item__assigned--link">
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648857762/GestWork/icons8-l%C3%A1piz-30_abusob.png"
                          alt="lapiz"
                          className="me-3"
                          style={{width:"30px"}}
                        />
                      </span>
                    </Link>
                    <img
                      src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648857762/GestWork/icons8-basura-24_anbbqa.png"
                      alt="icondelete"
                      style={{width:"30px"}}
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