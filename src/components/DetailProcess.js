import { DocumentPdf, DocumentPpt, Home } from "grommet-icons";
import React, { useEffect, useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProcessAsync } from "../redux/actions/actionProcess";

const DetailProcess = () => {
  const {id} = useParams();
  const [detailItem, setDetailItem ] = useState([]);
  const dispatch = useDispatch();
  const {process} = useSelector(store => store.process)
  console.log(process)

  useEffect(() => {
    dispatch(listProcessAsync())
    const filterProcess = process.find(item => item.id === id)
    if(filterProcess !== undefined) {
      setDetailItem(filterProcess);
    }
  }, [dispatch])

  return (
    <div className="containerAdd">
      <h2 className="title__section">Información del Proceso</h2>
      <div className="d-flex">
      <Col xs={6} className="mx-5">
        <form className="form-group">
          <Row className="mt-5">
            <label>N° de solicitud</label>
            <input
              type="text"
              name="numero proceso"
              className="form-control mt-2"
              autoComplete="off"
              value= {detailItem.id}
              disabled
              required
            />

            <Row className="mt-5">
              <label>Nombre de la iniciativa</label>
              <input
                type="text"
                className="form-control mt-2"
                name="nombre"
                autoComplete="off"
                value= {detailItem.nombre}
                disabled
                required
              />
            </Row>
            <Row className="mt-4">
              <label>Area encargada</label>
              <input
                type="text"
                className="form-control mt-2"
                name="areaEncargada"
                autoComplete="off"
                value= {detailItem.areaEncargada}
                disabled
                required
              />
              <label>Fecha Aproximada de solución</label>
              <input
                type="date"
                className="form-control mt-2"
                name="fecha"
                autoComplete="off"
                value= {detailItem.fecha}
                disabled
                required
              />
            </Row>
            <label className="mt-4">Lider / responsable</label>
            <input
                type="text"
                className="form-control mt-2"
                name="responsable"
                autoComplete="off"
                value= {detailItem.responsable}
                disabled
                required
              />
          </Row>
        </form>
      </Col>
      <Col xs={3}>
        <Row className="mt-4">
          <h3 className="title__section h3">Documentos de la iniciativa</h3>
        </Row>
        <Row className="mt-4">
          <DocumentPdf size="xlarge" />
          <DocumentPpt size="xlarge" />
        </Row>
      </Col>
      </div>
    </div>
  );
};

export default DetailProcess;
