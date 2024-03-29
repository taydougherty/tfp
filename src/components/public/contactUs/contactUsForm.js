import React, { Component } from "react";
import axios from "axios"
import './contactUs.scss'

class contactUsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      message: ''
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  // Submit function
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    axios({
      method: "POST",
      url: "http://localhost:3001/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
      this.resetForm()
    })
  }

  resetForm() {

    this.setState({
      name: '',
      subject: '',
      email: '',
      message: ''
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="contactUsFormContainer">

        <div className="row justify-content-center contactCards">

          {/* image column */}
          <div className="col">
            <div className="card border-light imgCard contactCard">
              <div className="card-body d-flex flex-column">
                <img className="placeholder" alt="placeholder" src={require('../../../assets/images/femalePlaceholder.jpg')} />
              </div>
            </div>

          </div>

          {/* note card column*/}
          <div className="col container">
            <div className="card border-light contactCard">
              <div className="card-body d-flex flex-column">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <h3 className="contactTitle">Send Us A Note</h3>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default contactUsForm