import { Notification } from 'grommet-icons';
import React, { useEffect, useState } from 'react'
import { Button, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { db, getToke, onMessageListener } from '../firebase/firebaseConfig';
import UserPerfil from '../hooks/UserPerfil';
import { listNotificationsAsync, listProcessAsync } from '../redux/actions/actionProcess';
import '../styles/Notifications.css'

const Notifications = () => {

  const dispatch = useDispatch();
  const user = UserPerfil();
  const [show, setShow] = useState(false);
  const [isTokenFound, setTokenFound] = useState(false);
  const [notification, setNotification] = useState({
    nombre: '',
    areaEncargada:'',
    fecha: '',
    responsable: ''
  });
  const {process} = useSelector(store => store.process);
  console.log(process);
  console.log(user);
  getToke(setTokenFound);

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({
      nombre: payload.process.nombre, 
      areaEncargada: payload.process.areaEncargada,
      fecha: payload.process.fecha,
      responsable: payload.process.responsable
    })
    console.log(payload);
    dispatch(listNotificationsAsync())
    dispatch(listProcessAsync());
  }).catch(err => console.log('failed:' , err));
  console.log(notification);
  return (
    <div className='container__notifications'>
      {process.map((item, index) => (
      <Toast key={index} onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          
        <Toast.Header>
          <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
          />
          <strong className="mr-auto title__main">{item.nombre}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
        <dl>
          <dd><span className='title__body'>AreaEncargada:</span>{item.areaEncargada}</dd>
          <dd><span className='title__body'>Fecha:</span>{item.fecha}</dd>
          <dd><span className='title__body'>Responsable:</span>{item.responsable}</dd>
        </dl>
        </Toast.Body>
      </Toast>
      ))}
      <div className="notification__header">
        {/* {isTokenFound && <span className='alert__permission-success  alert__permission'> Notification permission enabled</span>}
        {!isTokenFound && <span className='alert__permission-danger  alert__permission'> Need notification permission</span>} */}
        <Notification onClick={() => setShow(true)}/> 
      </div>
    </div>
  )
}

export default Notifications
