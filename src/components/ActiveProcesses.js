import React from "react";
import { Button, Card } from "react-bootstrap";
import { Search } from "./Search";

export const ActiveProcesses = () => {
  return (
    <>
      <div className="container">
        <div>
          <h2>Procesos Activos</h2>
        </div>
        <Search />
        <section>
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>1032 AVI</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button>Ver</Button>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  );
};
