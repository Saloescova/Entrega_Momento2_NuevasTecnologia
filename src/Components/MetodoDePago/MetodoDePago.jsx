import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MetodoDePago() {
  return (
    <section className='container-fluid'>
      <h3>Registro de Metodos de Pago</h3>
      <hr/>
    <Form>
      
        <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción del metodo" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formNombreCategoria">
            <Form.Label>Nombre del Metodo</Form.Label>
            <Form.Control type="text" placeholder="Nombre del metodo" />
          </Form.Group>
        </Col>
      </Row>

      
      <Button className="container-fluid" variant="primary" type="submit">
        Enviar
      </Button>
     
    </Form>
    
    </section>
  )
}
