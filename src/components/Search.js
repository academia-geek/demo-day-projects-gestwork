import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'

export const Search = () => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar propuestas por nombres"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  )
}
