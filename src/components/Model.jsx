import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Model({ card }) {

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img
          style={{ height: '300px', objectFit: 'cover' }}
          variant="top"
          src={card.img}
        />
        <Card.Body>
          <Card.Text>{card.model}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
