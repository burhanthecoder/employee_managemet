import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

const handleRead = () => {
  console.log('hello');
}

const handleUpdate = () => {
  // console.log(`Updating ${name}`);
}

const handleDelete = () => {
  // console.log(`Deleting ${name}`);
}

function Employee() {
  return (
    <div className="container my-4 mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course1.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <ListGroup>
  <ListGroup.Item>
    <button className="btn btn-primary mx-1" onClick={handleUpdate}> <i className="fas fa-eye"></i> Read</button>
    <button className="btn btn-warning mx-1" onClick={handleUpdate}> <i className="fas fa-edit"></i> Update</button>
    <button className="btn btn-danger mx-1" onClick={handleDelete}><i className="fas fa-trash"></i> Delete</button>
  </ListGroup.Item>
</ListGroup>

            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course2.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <button className="btn btn-primary mx-1"><i className="fas fa-eye"></i> Read</button>
                  <button className="btn btn-warning mx-1"><i className="fas fa-edit"></i> Update</button>
    <button className="btn btn-danger mx-1"><i className="fas fa-trash"></i> Delete</button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course3.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <button className="btn btn-primary mx-1"><i className="fas fa-eye"></i> Read</button>
                  <button className="btn btn-warning mx-1"><i className="fas fa-edit"></i> Update</button>
    <button className="btn btn-danger mx-1"><i className="fas fa-trash"></i> Delete</button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src="course3.jpg" style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <button className="btn btn-primary mx-1"><i className="fas fa-eye"></i> Read</button>
                  <button className="btn btn-warning mx-1"><i className="fas fa-edit"></i> Update</button>
    <button className="btn btn-danger mx-1"><i className="fas fa-trash"></i> Delete</button>
                </ListGroup.Item>
              </ListGroup>
              </Card.Body>

            
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Employee;