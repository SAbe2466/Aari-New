import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col clsaaName={props.step1 ? 'active' : ''}>Sign-In</Col>
      <Col clsaaName={props.step2 ? 'active' : ''}>Shipping</Col>
      <Col clsaaName={props.step3 ? 'active' : ''}>Payment</Col>
      <Col clsaaName={props.step4 ? 'active' : ''}>Place Order</Col>
    </Row>
  );
}
