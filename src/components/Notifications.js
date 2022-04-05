import { Toast } from 'bootstrap'
import React, { useState } from 'react'

const Notifications = () => {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({
    nombre: '',
    areaEncargada:'',
    fecha: '',
    responsable: ''
  })
  return (
    <div>
       <Toast/>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto"></strong>
            <small></small>
          </Toast.Header>
          <Toast.Body></Toast.Body>
    </div>
  )
}

export default Notifications
