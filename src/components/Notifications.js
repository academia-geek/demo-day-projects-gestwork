import { Toast } from 'bootstrap'
import React from 'react'

const Notifications = () => {
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
