import React from 'react'
import { Row } from 'react-bootstrap'
import Model from './Model'

export default function Account({ cards }) {
  return (
    <Row className="mt-4">
      {cards?.map((card) => (
        <Model
          card={card}
          key={card.id}
        />
      ))}
    </Row>
  )
}
