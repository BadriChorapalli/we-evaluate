import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CandidatePage from './Pages/CandidatePage';
import HiringPage from './Pages/HiringPage';
import ContributorPage from './Pages/ContributorPage';
import PricingPage from './Pages/PricingPage';
import ContactPage from './Pages/ContactPage';
import CandidateAssignmentPage from './Pages/CandidateAssignmentPage';
import CandidateDashboardPage from './Pages/CandidateDashboardPage';
import CandidateInvitationsPage from './Pages/CandidateInvitationsPage';
import CandidatePracticePage from './Pages/CandidatePracticePage';
import CandidateProfilePage from './Pages/CandidateProfilePage';
import HiringInvitationPage from './Pages/HiringInvitationPage';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		
			
		<Routes>
				<Route exact path='/' element={< HomePage />}></Route>
				
				<Route path="candidate" element={<CandidatePage />}>
						
						<Route path="dashboard" element={<CandidateDashboardPage />} />
						<Route path="assignment" element={<CandidateAssignmentPage />} />
						<Route path="invitations" element={<CandidateInvitationsPage />} />
						<Route path="practice" element={<CandidatePracticePage />} />
						<Route path="profile" element={<CandidateProfilePage />} />
						
       			</Route>
				<Route exact path='hiring' element={< HiringPage />}>
						<Route path="invitation" element={<HiringInvitationPage />} />
						
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
