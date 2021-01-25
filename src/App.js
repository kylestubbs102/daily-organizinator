import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Enter Description" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Day</Form.Label>
    <Form.Control  placeholder="Enter day" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>    
       
  );
}

export default App;
