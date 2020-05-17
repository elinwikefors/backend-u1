import React, { Component, Fragment } from 'react';

import './Table.css';

export default class Table extends Component {

	constructor(props) {
		super(props);
		this.state = {
			studentList: [],
			name: '',
			email: '',
			street: '',
			zipcode: '',
			city: '',
		}
	}

	BASE_URL = 'http://localhost:9000';

	componentDidMount() {
		this.fetchStudents();
	}

	fetchStudents = () => {
		fetch(this.BASE_URL + '/api/students/')
		.then(Response => Response.json())
		.then(res => {
			this.setState({
				studentList: res,
			});
		})
	}


  deleteStudents = async id => {        
    return fetch('http://localhost:9000/api/students/' + id, {
      method: 'DELETE',
    }).then(response => {
      return response.json();
    }).then((res) => {
			this.fetchStudents();
    })
  }



  render() {
		const { studentList } = this.state;
    return (
			<Fragment>
				<div className="table">
			{studentList.map((students) =>
				<div className="container" key={students._id}>
					<p>Name: {students.name}</p>
					<p>Email: {students.email}</p>
					<p>Street: {students.address.street}</p>
					<p>Zipcode: {students.address.zipcode}</p>
					<p>City: {students.address.city}</p>
					<button onClick={() => {this.deleteStudents(students._id)}} className="RemoveBtn">Remove</button>
				</div>
			)}
			</div>
			</Fragment>
    );
  }
}


