import React, { Component, Fragment } from 'react';

import './Form.css';




export default class componentName extends Component {

  constructor(props) {
    super(props)
    this.state = {
      studentList: [],

      name: '',
      email: '',
      street: '',
      zipcode: '',
      city: '',
    };
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    })
  }

  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    })
  }

  handleStreet = (event) => {
    event.preventDefault();
    this.setState({
      street: event.target.value,
    })
  }

  handleZipcode = (event) => {
    event.preventDefault();
    this.setState({
      zipcode: event.target.value,
    })
  }

  handleCity = (event) => {
    event.preventDefault();
    this.setState({
      city: event.target.value,
    })
  }

  createNewStudent = async (event) => {
    event.preventDefault();
    const student = {
      name: this.state.name,
      email: this.state.email,
        address: {
          street: this.state.street,
          zipcode: this.state.zipcode,
          city: this.state.city,
        }
    }

    fetch('http://localhost:9000/api/students', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })
    .then(res => res.json())
      .then(() => {
        this.props.getStudents();
        this.setState({
          name: '',
          email: '',
          street: '',
          zipcode: '',
          city: '',
        })
      })
  }

  

  render() {
    return (
      <Fragment>
          <h2>add new</h2>
          <form onSubmit = {this.createNewStudent}>
            <label>Name</label> <br/>
            <input 
            type="text" 
            value={this.state.name}
            onChange={this.handleName}
             /> <br/>
						<label>Email</label> <br/>
            <input 
            type="email" 
            value={this.state.email}
            onChange={this.handleEmail}
            /> <br/>
						<label>street</label> <br/>
            <input 
            type="text" 
            value={this.state.street}
            onChange={this.handleStreet}
            /> <br/>
						<label>zipcode</label> <br/>
            <input 
            type="text" 
            value={this.state.zipcode}
            onChange={this.handleZipcode}
            /> <br/>
						<label>city</label> <br/>
            <input 
            type="text" 
            value={this.state.city}
            onChange={this.handleCity} 
            /> <br/>
            <button onClick={() => window.location.reload(false)} className="newStudent">Add new</button>
          </form>
      </Fragment>
    );
  }
}
