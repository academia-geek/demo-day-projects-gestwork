import React from 'react'
import { Form } from 'react-bootstrap'
import {Search } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { searchProcessAsync } from '../redux/actions/actionProcess';
import '../styles/StyleActiveProcesses.css'
import '../styles/config.css'



export const SearchProcesses = () => {
  
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string().required()
    }),
    onSubmit:({search}) => {
      console.log(search);
      dispatch(searchProcessAsync(search))
    }
  })
  return (
    <Form className="d-flex" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Buscar propuestas por nombre"
          className="input__search"
          aria-label="Search"
          onChange={formik.handleInputChange}
          required
        />
        <button className='btn__search'>
          <Search color='white'/> 
        </button>
      </Form>
  )
}
