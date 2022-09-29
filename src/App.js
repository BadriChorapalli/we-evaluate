import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from './constants/actionTypes';
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
import HiringDashboardPage from './Pages/HiringDashboardPage';
import HiringInvitationPage from './Pages/HiringInvitationPage';
import HiringTemplatePage from './Pages/HiringTemplatePage';
import HiringQuestionsPage from './Pages/HiringQuestionsPage';
import HiringProfilePage from './Pages/HiringProfilePage';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import './App.css';
import { store } from './store';
import { push } from 'react-router-redux';
import Register from './Pages/Register';
const mapStateToProps = state => {
	return {
	  appLoaded: state.common.appLoaded,
	  appName: state.common.appName,
	  currentUser: state.common.currentUser,
	  redirectTo: state.common.redirectTo
	}};
  
  const mapDispatchToProps = dispatch => ({
	onLoad: (payload, token) =>
	  dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
	onRedirect: () =>
	  dispatch({ type: REDIRECT })
  });
  
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
						<Route path="dashboard" element={<HiringDashboardPage />} />
						<Route path="invitation" element={<HiringInvitationPage />} />
						<Route path="template" element={<HiringTemplatePage />} />
						<Route path="questions" element={<HiringQuestionsPage />} />
						<Route path="profile" element={<HiringProfilePage/>} />
						
				</Route>
				<Route exact path='/contributor' element={< ContributorPage />}></Route>
				<Route exact path='/pricing' element={< PricingPage />}></Route>
				<Route exact path='/contact' element={< ContactPage />}></Route>
				<Route exact path='/login' element={< Login />}></Route>
				<Route exact path='/signin' element={< SignIn />}></Route>
				<Route exact path='/register' element={< Register />}></Route>
		</Routes>
		
		</div>
	</Router>
);
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
