import React from "react";
import { Button, Card } from "react-bootstrap";
import { SearchProcesses } from "./SearchProcesses";
import '../styles/StyleActiveProcesses.css'
import '../styles/config.css'


export const ActiveProcesses = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="title__section">Procesos Activos</h2>
        </div>
        <SearchProcesses />
        <section>
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
