import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { SearchProcesses } from "./SearchProcesses";
import '../styles/StyleActiveProcesses.css'
import '../styles/config.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteProcess, listProcessAsync } from "../redux/actions/actionProcess";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { MenuNavigation } from "./MenuNavigation";
import { convertirID } from "./helpers/ConvertirId";


export const ActiveProcesses = () => {

  const dispatch = useDispatch();


  const {process} = useSelector(store => store.process)
  

  useEffect(() => {
    dispatch(listProcessAsync())
  }, [dispatch])

 
  return (
    <>
    <NavBar />
      <MenuNavigation />
      <div className="containerAdd pt-4">
        <div className="me-3 p-3 d-flex justify-content-center">
          <h2 className="title__section">Procesos Activos</h2>
        </div>
        <SearchProcesses />
        <section className= 'm-3'>
        {process.map((item, index) => (
            <Card
              key={index}
              border="primary"
              className="card__process"
              style={{ width: "85%" }}
            >
              <Card.Body>
                <div className="header__card">
                  <Card.Title>
                    <p className="item__assigned">
                      <span className="primary h4">Proceso:</span>
                      {item.nombre}/<span className="mx-2 h4">N°:</span>
                      {convertirID(item.id)}
                    </p>
                  </Card.Title>
                  <div className="m-2 p-1">
                    <Link to={`/editProcesses/${item.id}`}>
                      <span className="item__assigned--link">
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1648857762/GestWork/icons8-l%C3%A1piz-30_abusob.png"
                          alt="lapiz"
                          className="me-3"
                          style={{width:"30px", color:'red'}}
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
              <div className="ms-3">
              <Card.Text>
              <div >{item.descripcion} </div>
              </Card.Text>
              <div className="container-process">
               <Link to={`/detailProcess/${item.id}`}>
              <button className="btn__process">Ver</button>
              </Link>
              </div>
              </div>
            </Card.Body>
          </Card>
           ))}
        </section>
        {/* {detailData === true ? <EditProcesses editData={sendData}/> : "" } */}
      </div>
    </>
  );
};