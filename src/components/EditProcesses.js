import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm';
import { editProcessSync } from '../redux/actions/actionProcess';

const EditProcesses = ({editData}) => {
  console.log(editData);
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    // url: editData.url,
    // nombre: editData.nombre,
    // areaEncargada: editData.areaEncargada,
    // fecha: editData.fecha,
    // responsable: editData.responsable,
    // descripcion: editData.descripcion,
    // id:editData.id
  })

  // const { nombre, areaEncargada, fecha, responsable, descripcion, id} = values

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(editProcessSync(id, values))
    reset();
  }
  return (
    <div className="containerAdd">
    <h2 className="title__section">Información del Proceso</h2>
    <Col xs={6} className="mx-5">
      <form className="form-group" onSubmit={handleSubmit }>
        <Row className="mt-5">
          <label>N° de solicitud</label>
          <input
            type="text"
            name="numero proceso"
            className="form-control mt-2"
            autoComplete="off"
            onChange={handleInputChange}
            required
          />

          <Row className="mt-5">
            <label>Nombre de la iniciativa</label>
            <input
              type="text"
              className="form-control mt-2"
              name="nombre"
              autoComplete="off"
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required
            />
            <label>Fecha Aproximada de solución</label>
            <input
              type="date"
              className="form-control mt-2"
              name="fecha"
              autoComplete="off"
              onChange={handleInputChange}
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
