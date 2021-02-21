//import logo from './logo.svg';
import './App.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    //console.log(this.state.show)
    this.setState({ show: true });
    //console.log(this.state.show)
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("hello")
  };

  render() {
    return (
      <main>
        <h1> Daily Organizinator </h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Enter Description" />
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Day</Form.Label>
              <Form.Control  placeholder="Enter day" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form> 
        </Modal>
        <button type="button" onClick={this.showModal}>
          Add Event
        </button>
      </main>
    );
  };
};

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "display-block" : "display-none";
  console.log(showHideClassName)

  return (
      <div className={showHideClassName}>
          <section className="modal-main">
              {children}
          {/*}
          <button onClick={handleClose}>
            close
          </button>
          */}
          </section>
      </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<App />, container);

