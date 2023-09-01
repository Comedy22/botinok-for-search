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
  }, [])
  return (
    <Row className="mt-4">
      {sneakers?.map((sneaker) => (
        <>
          <img style={{ height: '600px', width: '600px' }} src={`https://trial-sport.ru/${sneaker.img}`} alt={sneaker.name} />
          <a href={`https://trial-sport.ru/${sneaker.link}`}>

            {sneaker.name}

          </a>
          <p>{sneaker.price ? sneaker.price : null}</p>
        </>
      ))}
    </Row>
  )
}
