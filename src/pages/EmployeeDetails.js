import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const EmployeeDetails = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    
    const response =  fetch('http://localhost:5000/employee/'+id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    
  })
      .then(response => response.json())
      .then(data => setEmployeeDetails(data));
  }, []);

  return (
    <Container className="mt-7">
      <Row>
        <Col>
          <Card>
            
            <Card.Header>Employee Details</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <p><strong>first Name: {employeeDetails.firstName}</strong> </p>
                  <p><strong>Last Name: {employeeDetails.lastName}</strong> </p>
                  <p><strong>Email: {employeeDetails.email}</strong> </p>
                  <p><strong>Phone: {employeeDetails.phone}</strong> </p>
                </Col>
                <Col>
                  {/* <p><strong>Email: {employeeDetails.email}</strong> </p> */}
                  <p><strong>Work Hours: {employeeDetails.workHours}</strong> </p>
                  <p><strong>Salary Type: {employeeDetails.salaryType}</strong> </p>
                  <p><strong>Salary: {employeeDetails.salary}</strong> </p>
                  <p><strong>Department: {employeeDetails.department}</strong> </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDetails;
