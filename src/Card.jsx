import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardContent from './CardContent';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

const Card = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={4} xl={3} >
       <CardContent/>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3}> <Card2/></Col>
        <Col xs={12} md={6} lg={4} xl={3}> <Card3/></Col>
        <Col xs={12} md={6} lg={4} xl={3}> <Card4/></Col>
      </Row>
    </Container>
  )
}

export default Card
