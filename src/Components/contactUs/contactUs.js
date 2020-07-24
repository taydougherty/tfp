import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap"
import axios from "axios"
import './contactUs.scss'

class contactUs extends Component {
  state = {
    name: "",
    subject: "",
    email: "",
    message: ""
  }

  // Submit function
  handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      form: this.state
    }
    // axios post request
    axios.post('some_route_here', {form})
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
    console.log(this.state)
  }

  render() {
    return (
      <div className="mainWrapper">
          <div>
            
            <div className="row">
              {/* note card column*/}
              <div className="col container">
                  <Card className="notecard">
                    <Card.Title>Send Us A Note</Card.Title>
                    <Form>
                      <Form.Group controlId="sendNote" onSubmit={this.form}>
                        <Form.Control className="cardInputs" required type="text" placeholder="Name" value={this.state.name} onChange={event => this.setState({name: event.target.value})}></Form.Control>
                        <Form.Control className="cardInputs" required type="text" placeholder="Subject" value={this.state.subject} onChange={event => this.setState({subject: event.target.value})}></Form.Control>
                        <Form.Control className="cardInputs" required type="email" placeholder="Email Address" value={this.state.email} onChange={event => this.setState({email: event.target.value})}></Form.Control>
                        <Form.Control className="cardInputs" required type="text" as="textarea" rows="5" placeholder="Message" value={this.state.message} onChange={event => this.setState({message: event.target.value})}></Form.Control>
                      </Form.Group>
                      <Button className="submitBtn" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                  </Card>
              </div>
              {/* image column */}
              <div className="col blah">

              </div>
            </div>
            
          </div>

        </div>
    )
  }
}

export default contactUs