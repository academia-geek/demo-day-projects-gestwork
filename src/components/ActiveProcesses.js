import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Edit, Trash } from "grommet-icons";
import { SearchProcesses } from "./SearchProcesses";
import "../styles/StyleActiveProcesses.css";
import "../styles/config.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProcess,
  editProcessAsync,
  listProcessAsync,
} from "../redux/actions/actionProcess";
import { Link } from "react-router-dom";

export const ActiveProcesses = () => {
  const dispatch = useDispatch();

  const { process } = useSelector((store) => store.process);

  useEffect(() => {
    dispatch(listProcessAsync());
  }, []);

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
              border="primary"
              className="card__process"
              style={{ width: "48rem" }}
            >
              <Card.Body>
                <div className="header__card">
                  <Card.Title>
                    <p className="item__assigned mx-5">
                      <span className="primary h4">Proceso:</span>
                      {item.nombre} /
                      <span className="mx-2 h4">N°:</span>
                      {item.id}
                    </p>
                  </Card.Title>
                  <div>
                    <Link to={'/editProcesses'}>
                    <span className="item__assigned--link">
                      <Edit
                        className="icon__assigned"
                        color="plain"
                        onClick={() => dispatch(deleteProcess())}
                        />
                    </span>
                    </Link>
                    <span className="item__assigned--link">
                      <Trash
                        className="icon__assigned"
                        color="plain"
                        onClick={() => dispatch(editProcessAsync())}
                      />{" "}
                    </span>
                  </div>
                </div>
                <Card.Text>{item.descripcion}</Card.Text>
                <button className="btn__process">
                <Link to="/detailProcess">Ver</Link>
              </button>
              </Card.Body>
            </Card>
          ))}
          <Card
            border="primary"
            className="card__process"
            style={{ width: "48rem" }}
          >
            <Card.Body>
              <div className="header__card">
                <Card.Title>1032 AVI</Card.Title>
                <div>
                  <span className="item__assigned--link">
                    <Edit
                      className="icon__assigned"
                      color="plain"
                      onClick={() => dispatch(deleteProcess())}
                    />{" "}
                  </span>
                  <span className="item__assigned--link">
                    <Trash
                      className="icon__assigned"
                      color="plain"
                      onClick={() => dispatch(editProcessAsync())}
                    />{" "}
                  </span>
                </div>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn__process">Ver</button>
            </Card.Body>
          </Card>
          <Card
            border="primary"
            className="card__process"
            style={{ width: "48rem" }}
          >
            <Card.Body>
              <div className="header__card">
                <Card.Title>1032 AVI</Card.Title>
                <div>
                  <span className="item__assigned--link">
                    <Edit
                      className="icon__assigned"
                      color="plain"
                      onClick={() => dispatch(deleteProcess())}
                    />{" "}
                  </span>
                  <span className="item__assigned--link">
                    <Trash
                      className="icon__assigned"
                      color="plain"
                      onClick={() => dispatch(editProcessAsync())}
                    />{" "}
                  </span>
                </div>
              </div>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn__process">
                <Link to="/detailProcess">Ver</Link>
              </button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};
