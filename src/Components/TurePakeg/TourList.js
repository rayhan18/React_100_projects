import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Tour from '../TurePakeg/Tour';


const TourList = ({ tours, removeTour }) => {

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
            <section>
          <div className="title">
            <h2>our tours List</h2>
            <div className="underline"></div>
          </div>
          <div>
            {tours.map((tour) => {
              return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
            })}
          </div>
        </section>
        </Col>
      </Row>
    </Container>
   
  );
};

export default TourList;
