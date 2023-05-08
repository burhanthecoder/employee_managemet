import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


const handleRead = (id) => {
  console.log('hello');
  window.location.href = '/employee-details/'+id
}

const handleUpdate = (id) => {
  
  window.location.href = '/add-employee/'+id;
}

function Employee() {
  const [employees, setEmployees] = useState([]);
  const handleDelete = (employeeId) => {
    fetch(`http://localhost:5000/employee/${employeeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    getData();
  }
  function getData() {
  
   
   const response =  fetch('http://localhost:5000/employee', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    
  })
      .then(response => response.json())
      .then(data => setEmployees(data));
}
  useEffect(() => {

   getData();
  }, []);

  return (
    <div className="container my-4 mt-5">
      <div className="row">
        {employees.map(employee => (
          <div key={employee.id} className="col-md-6 col-lg-4 mb-4">
            <Card className="h-100 border-0 shadow-sm">
            
              <Card.Body className="p-4">
                <Card.Title className="mb-3">{employee.firstName} {employee.lastName} </Card.Title>
                <Card.Title className="mb-3">{employee.phone}</Card.Title>
                <Card.Title className="mb-3">{employee.department}</Card.Title>
                <ListGroup>
                  <ListGroup.Item className="p-0 border-0">
                    <button className="btn btn-primary mx-1" onClick={() => handleRead(employee._id)}><i className="fas fa-eye"></i> Read</button>
                    <button className="btn btn-warning mx-1" onClick={() => handleUpdate(employee._id)}><i className="fas fa-edit"></i> Update</button>
                    <button className="btn btn-danger mx-1" onClick={() => handleDelete(employee._id)}><i className="fas fa-trash"></i> Delete</button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employee;
