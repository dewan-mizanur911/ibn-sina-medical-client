import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const history = useHistory();
    const { name, id } = service;

    const handleDetails = () => {
        history.push(`/service/${id}`)
    }
    return (
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button onClick={handleDetails} variant="primary">Details</Button>{" "}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;