import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Expensess() {
  return (
   
    <section className='container-fluid'>
      <h3>Registro de Gastos</h3>
      <hr/>
    <Form>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formMonto">
            <Form.Label>Monto</Form.Label>
            <Form.Control type="number" placeholder="Ingresa el monto" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción del gasto" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formNombreGasto">
            <Form.Label>Nombre del Gasto</Form.Label>
            <Form.Control type="text" placeholder="Nombre del gasto" />
          </Form.Group>
        </Col>
      </Row>

      
      <Button className="container-fluid" variant="primary" type="submit">
        Enviar
      </Button>
     
    </Form>
    
    </section>
  );
}

export default Expensess;