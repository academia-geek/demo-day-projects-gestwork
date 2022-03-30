import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import {Edit, Trash } from 'grommet-icons';
import { SearchProcesses } from "./SearchProcesses";
import '../styles/StyleActiveProcesses.css'
import '../styles/config.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProcess, editProcessAsync, listProcessAsync } from "../redux/actions/actionProcess";


export const ActiveProcesses = () => {

  const dispatch = useDispatch();

  const {process} = useSelector(store => store.process)
  
  useEffect(() => {
    dispatch(listProcessAsync())
    console.log("holaaxD")

  }, [dispatch])

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
                <Card.Title>{item.id}{item.nombre}</Card.Title>
                <div>
                  <span className='item__assigned--link'><Edit className="icon__assigned" color='plain' onClick={()=> dispatch(deleteProcess())}/> </span>
                  <span className='item__assigned--link'><Trash className="icon__assigned" color='plain' onClick={()=> dispatch(editProcessAsync())}/> </span>
                </div>
              </div>
              <Card.Text>
               {item.descripcion}
              </Card.Text>
              <button className="btn__process">Ver</button>
            </Card.Body>
          </Card>
           ))}
          <Card border="primary" className="card__process" style={{ width: "48rem" }}>
            <Card.Body>
              <Card.Title>1032 AVI</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="btn__process">Ver</button>
            </Card.Body>
          </Card>
          <Card border="primary" className="card__process" style={{ width: "48rem" }}>
            <Card.Body>
              <Card.Title>1032 AVI</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <button className="btn__process">Ver</button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};