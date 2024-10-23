import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Category() {
  return (
    <section className='container-fluid'>
      <h3>Registro de Categorias</h3>
      <hr/>
    <Form>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formFotoIcono">
            <Form.Label>Foto Icono</Form.Label>
            <Form.Control type="imagen" placeholder="Ingresa la foto" />
          </Form.Group>
        </Col>
        
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción de la categoria" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formNombreCategoria">
            <Form.Label>Nombre de la Categoria</Form.Label>
            <Form.Control type="text" placeholder="Nombre de la categoria" />
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
