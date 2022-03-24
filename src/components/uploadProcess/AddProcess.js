import { useFormik } from "formik";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../styles/StyleAddProcess.css";

export const AddProcess = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      url: "",
      nombre: "",
      areaencargada: "",
      fecha: "",
      responsable: "",
      descripcion: "",
    },
  });
  return (
    <div>
      <div className="container mt-1">
        <form className="form-group">
          <Row className="row-form">
            <Col xs={4}>
              <h2>Sube tu proceso</h2>
              <label>Sube propuesta</label>
              <input type="file" />
            </Col>

            <Col xs={8}>
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
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
                  />
                </Col>
                <Col>
                  <label>Fecha Aproximada de solución</label>
                  <input
                    type="date"
                    className="form-control mt-2"
                    name="fecha"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    required
                  />
                </Col>
              </Row>
              <label>Lider / responsable</label>
              <input
                type="text"
                className="form-control mt-2"
                name="responsable"
                onChange={formik.handleChange}
                autoComplete="off"
              />
            </Col>
            <Row className="row-resum mt-3">
              <Col className="col-resum">
                <label>Resumen Proceso</label>
                <textarea
                  className="form-control mt-2 w-50 m-auto texareaResum"
                  placeholder="Descripción"
                  name="descripcion"
                  onChange={formik.handleChange}
                ></textarea>
              </Col>
            </Row>
          </Row>

          <div className=" mt-4 container-btn-add">
            <input
              value="Subir"
              type="submit"
              className="btn btn-add-process px-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
