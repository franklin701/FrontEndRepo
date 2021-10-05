
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form, Alert} from 'react-bootstrap';
function NewAccountModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        New Account Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
        <Form >
          <Form.Group id="texts">
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
            <Form.Group id="texts">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text"  required/>
            </Form.Group>
           
            <Button         className="w-100 mt-3" 
              type="submit">Save</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default NewAccountModal
