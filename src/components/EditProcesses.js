import React from 'react'
import { Col, Row } from 'react-bootstrap'

const EditProcesses = () => {
  return (
    <div className="containerAdd">
    <h2 className="title__section">Información del Proceso</h2>
    <Col xs={6} className="mx-5">
      <form className="form-group">
        <Row className="mt-5">
          <label>N° de solicitud</label>
          <input
            type="text"
            name="numero proceso"
            className="form-control mt-2"
            autoComplete="off"
            required
          />

          <Row className="mt-5">
            <label>Nombre de la iniciativa</label>
            <input
              type="text"
              className="form-control mt-2"
              name="nombre"
              autoComplete="off"
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
              required
            />
            <label>Fecha Aproximada de solución</label>
            <input
              type="date"
              className="form-control mt-2"
              name="fecha"
              autoComplete="off"
              required
            />
          </Row>
          <label className="mt-4">Lider / responsable</label>
          <select name="responsable" className="form-control mt-2">
            <option disabled={true}>Selecciona un responsable </option>
            <option></option>
          </select>
        </Row>
      </form>
    </Col>
  </div>
   
  )
}

export default EditProcesses
