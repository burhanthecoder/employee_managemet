import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function AddEmployee() {
  const [employeeDetails, setEmployeeDetails] = useState({});
  let { id } = useParams();
  
  useEffect(() => {
    
    if (id) {
      const response = fetch('http://localhost:5000/employee/'+id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => setEmployeeDetails(data));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setEmployeeDetails(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const method_ = id ? 'PUT' : 'POST'
    const url = id? 'http://localhost:5000/employee/'+id:'http://localhost:5000/employee'
    const response = fetch(url, {
      method: method_,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Employee added successfully');
        window.location.href = '/employee';
        
      })
      .catch((error) => {
        console.error(error);
        
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form className="border p-4" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={employeeDetails.firstName}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={employeeDetails.lastName}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
              
               value={employeeDetails.phone}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={employeeDetails.email}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="workHours">
              <Form.Label>Work Hours</Form.Label>
              <Form.Control
                type="number"
                name="workHours"
                value={employeeDetails.workHours}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="salaryType">
              <Form.Label>Salary Type</Form.Label>
              <Form.Control
                as="select"
                name="salaryType"
                value={employeeDetails.salaryType}

               onChange={(e) => handleChange(e)}
              >
                <option value="hourly">Hourly</option>
                <option value="salary">Salary</option>
                <option value="performance">Performance-based</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="salary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="number"
                name='salary'
                value={employeeDetails.salary}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name='department'
                value={employeeDetails.department}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Button type="submit" className="mt-3">Submit</Button>
          </Form>
          </Col>
          </Row>
          </Container>
  )
};

export default AddEmployee;

