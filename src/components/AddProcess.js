import React from "react";
import { Col, Row } from "react-bootstrap";

export const AddProcess = () => {
  return (
    <div>
      <div className="container">
        <form className="form-group">
          <Row>
            <Col xs={4}>
              <h2>Sube tu proceso</h2>
              <label>Sube propuesta</label>
              <input type="file" />
            </Col>

            <Col xs={5}>
              <h1>Informacion de proceso</h1>
              <Row>
                <Col>
                  <label>N solicitud</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="nSolicitud"
                    autoComplete="off"
                    disabled
                  />
                </Col>
                <Col>
                  <label>Nombre de la iniciativa</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="nombre"
                    autoComplete="off"
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <label>Area encargada</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="areaencargada"
                    autoComplete="off"
                  />
                </Col>
                <Col>
                  <label>Fecha Aproximada de solución</label>
                  <input
                    type="date"
                    className="form-control mt-2"
                    name="fecha"
                    autoComplete="off"
                    required
                  />
                </Col>
              </Row>
              <label>Lider / responsable</label>
              <input
                type="text"
                className="form-control mt-2"
                name="responsable"
                autoComplete="off"
              />
            </Col>

            <Row>
              <Col>
                <label>Resumen Proceso</label>

                <textarea
                  className="form-control mt-2 w-50"
                  name="descripcion"
                ></textarea>
              </Col>
            </Row>
          </Row>

          <div className=" mt-2">
            <input
              value="Subir"
              type="submit"
              className="btn btn-outline-dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
