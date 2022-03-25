import { collection, getDocs } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import "../../styles/StyleAddProcess.css";
import { guardarArchivo } from "../helpers/FileUpload";

export const AddProcess = () => {
  const [dataUser, setDataUser] = useState();

  const getUser = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({
        ...doc.data(),
      });
    });

    setDataUser(users);
  };

  useEffect(() => {
    getUser();
  }, [dataUser]);

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
              <h2 className="subtitle-text mb-4">Sube tu proceso</h2>
              <label className="mb-3">Sube propuesta</label>
              <input type="file" onChange={(e) => guardarArchivo(e)} />
            </Col>

            <Col xs={8}>
              <h2 className="subtitle-text mb-5 text-center">
                Información de proceso
              </h2>
              <Row className="mt-5">
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

              <Row className="mt-4">
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
              <label className="mt-4">Lider / responsable</label>
              <select className="form-control mt-2">
                {dataUser ? (
                  dataUser.map((u) => <option key={u.id}>{u.name} / {u.cargo}</option>)
                ) : (
                  <option></option>
                )}
                ;
              </select>
            </Col>
            <Row className="row-resum mt-4">
              <Col className="col-resum">
                <label className="mb-3">Resumen Proceso</label>
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
