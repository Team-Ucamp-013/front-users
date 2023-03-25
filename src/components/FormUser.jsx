import React, { useState } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'

const FormUser = () => {

  const [form, setForm] = useState(null)

  // const saveUser = () => {

  // }

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.name]: ev.value
    })
    console.log(form)
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e.target)} value={form} />
          <input type="text" placeholder="description" name="description" onChange={(e) => handleChange(e.target)} />
          <input type="text" placeholder="price" name="price" onChange={(e) => handleChange(e.target)} />
        </Col>
        {form}
      </Row>
    </Container>
  )
}

export default FormUser