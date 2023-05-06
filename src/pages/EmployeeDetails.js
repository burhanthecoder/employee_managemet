import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const EmployeeDetails = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Employee Details</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <p><strong>Name:</strong> </p>
                  <p><strong>Age:</strong> </p>
                  <p><strong>Gender:</strong> </p>
                  <p><strong>Department:</strong> </p>
                </Col>
                <Col>
                  <p><strong>Address:</strong> </p>
                  <p><strong>Phone:</strong> </p>
                  <p><strong>Email:</strong> </p>
                  <p><strong>Salary:</strong> </p>
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
