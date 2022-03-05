import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
        <article className="">
      <img src={image} alt={name} />
      <footer className="w-75 border mx-auto mb-5 p-3 mt-2">
        <div >
          <h4>{name}</h4>
          <h4 className="text-warning">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="bg-info" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="bg-warning" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
        </Col>
      </Row>
    </Container>
   
  );
};

export default Tour;
