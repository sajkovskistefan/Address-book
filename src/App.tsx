import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contacts from './Components/Pages/Contacts';
import AddDeleteEditContact from './Components/Pages/AddDeleteEditContact/index';
import EditContactPage from './Components/Pages/EditContactPage';
import Nav from './Components/Navigation';
import { ROUTES } from './Services/Data/Routes';

// import './App.css';
import './Assets/Styles/Home.css'
import './Assets/Styles/Global.css';
import Homepage from './Components/Pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
		<h1 className="App-tittle">The Address Book</h1>
		<Nav/>
		<Switch>
			{/* <Route exact path={ROUTES.HOME} component={Homepage} /> */}
			<Route exact path={ROUTES.ALL_CONTACTS} component={Contacts} />
			<Route path={ROUTES.ADD_EDIT_DELETE_CONTACT} component={AddDeleteEditContact} />
			<Route path={ROUTES.EDIT_CONTACT} component={EditContactPage} />
		</Switch>
    </div>
  );
};

export default App;
