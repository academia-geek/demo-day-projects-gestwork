import { collection, getDocs } from "firebase/firestore";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebaseConfig";
import { addProcessAsync } from "../../redux/actions/actionProcess";
import "../../styles/StyleAddProcess.css";
// import { guardarArchivo } from "../helpers/FileUpload";

export const AddProcess = () => {
  const [dataUser, setDataUser] = useState();
  const [user, setUser] = React.useState("users");

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
      areaEncargada: "",
      fecha: "",
      responsable: [],
      descripcion: "",
    },
    onSubmit: (data) => {
      dispatch(addProcessAsync(data));
    },
  });

  const handleChangeUser = (event) => {
    setUser(event.target.value);
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  function guardarArchivo(e) {
    var file = e.target.files[0]; //the file
    var reader = new FileReader(); //this for convert to Base64
    reader.readAsDataURL(e.target.files[0]); //start conversion...
    reader.onload = function (e) {
      //.. once finished..
      var rawLog = reader.result.split(",")[1]; //extract only thee file data part
      var dataSend = {
        dataReq: { data: rawLog, name: file.name, type: file.type },
        fname: "uploadFilesToGoogleDrive",
      }; //preapre info to send to API
      fetch(
        "https://script.google.com/macros/s/AKfycbxGIL5Mdajs3FTpwX9IJSwomOBK5igjhc9rNgA9GaMf_D-olgYTvFVE7qSOg_yoD1d8/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ) //send to Api
        .then((res) => res.json())
        .then((file) => {
          console.log(file.url); //See response actualziar estado
          formik.initialValues.url = file.url;
        })
        .catch((e) => console.log(e)); // Or Error in console
    };
  }

  return (
    <div>
      <div className="containerAdd mt-1">
        <form className="form-group" onSubmit={formik.handleSubmit}>
          <Row className="row-form">
            <Col xs={4}>
              <h2 className="subtitle-text mb-4">Sube tu proceso</h2>
              <label className="mb-3">Sube propuesta</label>
              <input
                id="fileSelector"
                type="file"
                name="url"
                style={{ display: 'none' }}
                onChange={(e) => guardarArchivo(e)}
              />
              <button
                className="btn btnAddFile"
                onClick={handlePictureClick}
                type="button"
              >
                SELECCIONAR ARCHIVO
              </button>
            </Col>

            <Col xs={8}>
              <h2 className="subtitle-text mb-5 text-center">
                Información de proceso
              </h2>
              <Row className="mt-5">
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
                    name="areaEncargada"
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
              <select
                name="responsable"
                value={user}
                className="form-control mt-2"
                onChange={handleChangeUser}
              >
                {dataUser ? (
                  dataUser.map((u) => (
                    <option key={u.id} value={u.name + u.cargo}>
                      {u.name} / {u.cargo}
                    </option>
                  ))
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
