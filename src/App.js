import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CandidatePage from './Pages/CandidatePage';
import HiringPage from './Pages/HiringPage';
import ContributorPage from './Pages/ContributorPage';
import PricingPage from './Pages/PricingPage';
import ContactPage from './Pages/ContactPage';
import AssignmentPage from './Pages/AssignmentPage';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		
			
		<Routes>
				<Route exact path='/' element={< HomePage />}></Route>
				
				<Route path="candidate" element={<CandidatePage />}>
						<Route path="assignment" element={<AssignmentPage />} />
						
       			</Route>
				<Route exact path='/hiring' element={< HiringPage />}>
						<Route path="assignment" element={<AssignmentPage />} />
						
				</Route>
				<Route exact path='/contributor' element={< ContributorPage />}></Route>
				<Route exact path='/pricing' element={< PricingPage />}></Route>
				<Route exact path='/contact' element={< ContactPage />}></Route>
		</Routes>
		
		</div>
	</Router>
);
}
}

export default App;
