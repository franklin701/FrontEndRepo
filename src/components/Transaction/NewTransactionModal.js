import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, Alert} from 'react-bootstrap';
function NewTransactionModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        New Transaction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">      
        <Form >
          <Form.Group id="texts">
              <Form.Label>Origin Account Number</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
            <Form.Group id="texts">
              <Form.Label> Type</Form.Label>
              <select className="form-control" id="exampleFormControlSelect1">
      <option>Income</option>
      <option>Expense</option>

    </select>
            </Form.Group>
            
            <Form.Group id="texts">
              <Form.Label>Destination Account Number</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
            <Form.Group id="texts">
              <Form.Label> Amount $</Form.Label>
              <Form.Control type="text" required/>
            </Form.Group>




            <Form.Group id="texts">
              <Form.Label> Category</Form.Label>
              <select className="form-control" id="exampleFormControlSelect1">
      <option>Category 1</option>
      <option>Category 2</option>
      <option>Category 3</option>
      <option>Category 4</option>
      <option>Category 5</option>
    </select>
            </Form.Group>
            <Form.Group id="comments">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} required/>
            </Form.Group>
            <Button 
             
              className="w-100 mt-3" 
              type="submit">Save</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default NewTransactionModal
