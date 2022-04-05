import React, { useEffect } from "react";
// import { Card } from "react-bootstrap";
import { SearchProcesses } from "./SearchProcesses";
import "../styles/StyleActiveProcesses.css";
import "../styles/config.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProcess,
  listProcessAsync,
} from "../redux/actions/actionProcess";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { MenuNavigation } from "./MenuNavigation";
import { convertirID } from "./helpers/ConvertirId";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ActiveProcesses = () => {
  const dispatch = useDispatch();

  const { process } = useSelector((store) => store.process);

  useEffect(() => {
    dispatch(listProcessAsync());
  }, [dispatch]);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <NavBar />
      <MenuNavigation />
      <div className="containerAdd  containerActive pt-4">
        <div className="pb-4">
          <div className="me-3  p-3 d-flex" style={{ justifyContent: "center" }}>
            <h2 className="title__section">Procesos Activos</h2>
          </div>
          <SearchProcesses />
          <section className="m-3">
            {process.map((item, index) => (
              <div className="mb-4">
                <Card className="card__process" key={index}  sx={{ minWidth: 275 }}>
                  <CardContent>
                    <div className="container-action">
                    <Typography variant="h5" component="div">
                      <span className="primary">Proceso</span>
                    </Typography>
                    <div className="m-2 p-1">
                        <Link to={`/editProcesses/${item.id}`}>
                          <span className="item__assigned--link">
                            <img
                              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649192346/GestWork/icons8-l%C3%A1piz-30_2_mfbknx.png"
                              alt="lapiz"
                              className="me-3"
                              style={{ width: "35px" }}
                            />
                          </span>
                        </Link>
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649192467/GestWork/icons8-basura-24_1_uxw2sa.png"
                          alt="icondelete"
                          style={{ width: "25px" }}
                          onClick={() => dispatch(deleteProcess(item.id))}
                        />
                        </div>
                      </div>
                    <Typography variant="h6" component="div">
                      {item.nombre}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      N°: {convertirID(item.id)}
                    </Typography>
                    <Typography variant="body3">{item.descripcion}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button  className="btn__process mb-3" variant="contained" as={Link}  to={`/detailProcess/${item.id}`}>
                      Ver
                    </Button>
                  </CardActions>
                </Card>
                {/*<Card
                  key={index}
                  border="primary"
                  className="card__process"
                  style={{ width: "85%" }}
                >
                  <Card.Body>
                    <div className="header__card">
                      <Card.Title>
                        <div className="item__assigned">
                          <p>
                            <span className="primary">Proceso</span>
                          </p>
                          <br />
                          <span className="numeroSolicitud">
                            N°: {convertirID(item.id)}
                          </span>
                          <br />
                          {item.nombre}
                        </div>
                      </Card.Title>
                      <div className="m-2 p-1">
                        <Link to={`/editProcesses/${item.id}`}>
                          <span className="item__assigned--link">
                            <img
                              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649192346/GestWork/icons8-l%C3%A1piz-30_2_mfbknx.png"
                              alt="lapiz"
                              className="me-3"
                              style={{ width: "35px" }}
                            />
                          </span>
                        </Link>
                        <img
                          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1649192467/GestWork/icons8-basura-24_1_uxw2sa.png"
                          alt="icondelete"
                          style={{ width: "25px" }}
                          onClick={() => dispatch(deleteProcess(item.id))}
                        />
                      </div>
                    </div>
                    <div className="ms-3">
                      <Card.Text>{item.descripcion}</Card.Text>
                      <div className="container-process">
                        <Link to={`/detailProcess/${item.id}`}>
                          <button className="btn__process">Ver</button>
                        </Link>
                      </div>
                    </div>
                  </Card.Body>
                </Card>*/}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
