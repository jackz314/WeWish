import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import "./style/Dashboard.css"

class Wishlist extends Component {
  render() {
    return (
    	<div className="main-wrapper">
    		<h1> My Wishlist </h1>
    		<Container fluid className="p-4">
			  <Row>
			    <Col className="main-card">
			    	<h2>My Wishlist</h2>
			    	<Col className="sub-card">
			    		<h3>Wish 1</h3>
			    		<p>01-01-2021</p>
			    		<span>In progress</span>
			    	</Col>
			    	<Col className="sub-card">
			    		<h3>Wish 2</h3>
			    		<p>01-01-2021</p>
			    		<span>In progress</span>
			    	</Col>
			    </Col>
			    <Col xs={7} className="main-card"><h2></h2>
			    </Col>
			  </Row>
			 </Container>
    	</div>
    	)
  }
}

export default Wishlist