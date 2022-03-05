import React from 'react';
import {Container ,Row,Col} from 'react-bootstrap'
const Loading = () => {
  return (
    < >
    <Container>
        <Row className="justify-content-center">
            <Col className="text-center">
            <h1>loading...</h1>
            </Col>
        </Row>
      
    </Container>
     
    </>
  );
};

export default Loading;
