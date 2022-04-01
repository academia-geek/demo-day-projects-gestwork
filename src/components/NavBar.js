import React, { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Notification } from "grommet-icons";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { Cargo } from "../redux/actions/actionLogin";


export const NavBar = () => {
  const [objtFav, setObjfav] = useState('bb');
  const [nombre, setObjnombre] = useState('bb');

  let estados = useSelector((state) => {
    return state;
  });
  console.log("ee")
  console.log(estados)
  let dispatch = useDispatch();

  
const listitem2 = async () => {
console.log(estados)
//console.log(estados.user.email)
console.log("estados.user.email")
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (doc.data().email === estados.login.user.email){
     let cargo= doc.data().cargo
      console.log("if cargo")
      console.log(cargo)
      //estados.user.cargo=cargo
      setObjfav(cargo)
      setObjnombre(estados.login.user.nombre
        )
    ///dispatch(Cargo(cargo));
      
    }   
  });

};

const listitem = async () => {
    setTimeout(()=>{listitem2()},3000)

}
listitem2()

useEffect(() => {
  //listitem()
    console.log(estados,"ssssssssssssssssssssssssss")
    //listitem()
}, []);

  return (
    <Navbar bg="light" className='container-fluid d-flex justify-content-end t-0'>
      <Container fluid className='container-fluid d-flex justify-content-end t-0'>
      
          <Form className="sub_navBar">
            <div className="subtitle_navBar container-fluid d-flex justify-content-end">
              <h4>{nombre}</h4>
              <h4>{objtFav}</h4>
            </div>
            <div className="d-flex p-1">
              <img
                className="phone__profile"
                src="https://e7.pngegg.com/pngimages/272/184/png-clipart-businessperson-avatar-woman-business-avatar-microphone-black-hair.png"
             alt='' />
             
            </div>
          </Form>
   
      </Container>
    </Navbar>
  ); 
};
