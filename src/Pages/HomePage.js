import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function HomePage (){
    return <div>
        	<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/candidate">Candidate</Link>
			</li>
			<li>
				<Link to="/hiring">Hiring</Link>
			</li>
			<li>
				<Link to="/contributor">Contributor</Link>
			</li>
			<li>
				<Link to="/pricing">Pricing</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
			</ul>
    </div>
}
  
export default HomePage;