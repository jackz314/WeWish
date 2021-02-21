import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import "./style/Dashboard.css"

class Dashboard extends Component {
  render() {
    return (
    	<div className="main-wrapper">
    		<h1> Home </h1>
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
			    <Col className="main-card"><h2>My Groups</h2>
			    	<Col className="sub-card">
			    		<h3>Group 1</h3>
			    		<p>(Wish 1 group)</p>
			    		<span>126 members</span>
			    	</Col>
			    	<Col className="sub-card">
			    		<h3>Group 2</h3>
			    		<p>(Wish 2 group)</p>
			    		<span>99 members</span>
			    	</Col>
			    </Col>
			  </Row>
			 </Container>
    	</div>
    	)
  }
}

export default Dashboard