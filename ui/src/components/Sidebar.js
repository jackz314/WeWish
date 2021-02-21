import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./style/Sidebar.css"

class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar">
    	<h1>WeWish</h1>
    	<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Wishlist">My Wishlists</Link></li>
        <li><Link to="/Groups">My Groups</Link></li>
        <li><Link to="/Explore">Explore</Link></li>
      </ul>
    </div>
    )
  }
}

export default Sidebar