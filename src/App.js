import React, { Component } from 'react';

import './App.css'; 

import Table from './Components/Table';
import Form from './Components/Form';


class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      studentList: [],
    }
  }

  
  getStudents = () => {
    fetch('http://localhost:9000/api/students')
      .then((Response) => Response.json())
      .then((res) => {
        this.setState({
          studentList: res,
        });
      })
  }

  render() {
    return (
      <div className="App">
      <h1>Bong Bong</h1>
      
      <Form getStudents={this.getStudents} ></Form>
      <Table studentList={this.state.studentList}></Table>
    </div>
    );
  }
}
export default App;
