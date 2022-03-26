import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import {Search } from 'grommet-icons';

export const SearchProcesses = () => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar propuestas por nombres"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className=''>
          <Search size='large' /> 
        </Button>
      </Form>
  )
}
