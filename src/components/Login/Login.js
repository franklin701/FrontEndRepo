import { Card, Form, Button, Alert} from 'react-bootstrap';

const Login = () => {
  return (
  <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
        
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  required/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required/>
              </Form.Group>
              <Button 
               
                className="w-100 mt-3" 
                type="submit">Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
    );
}

export default Login;