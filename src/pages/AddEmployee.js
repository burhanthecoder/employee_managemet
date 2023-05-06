import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [workHours, setWorkHours] = useState('');
  const [salaryType, setSalaryType] = useState('');
  const [salary, setSalary] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
  };
  

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="border p-4">
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg, .jpeg, .png"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="workHours">
              <Form.Label>Work Hours</Form.Label>
              <Form.Control
                type="number"
                value={workHours}
                onChange={(e) => setWorkHours(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="salaryType">
              <Form.Label>Salary Type</Form.Label>
              <Form.Control
                as="select"
                value={salaryType}
                onChange={(e) => setSalaryType(e.target.value)}
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
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
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

       
