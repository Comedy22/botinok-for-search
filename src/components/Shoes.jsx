import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';

export default function Shoes() {
  const { id } = useParams();
  const [sneakers, setSneakers] = useState([]);
  useEffect(() => {
    axios(`/scrapper/shoes/${id}`)
      .then((response) => setSneakers(response.data));
  })
  return (
    <Row className="mt-4">
      {sneakers?.map((sneaker) => (
        <li>

          {sneaker}

        </li>

      ))}
    </Row>
  )
}
