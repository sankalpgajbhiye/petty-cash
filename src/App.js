import React, { useState } from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import { UserContext } from './UserContext';

import { itemsArr } from './constant'

// Pages Import
import Timer from './Pages/Timer';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Item from './Pages/Item';
import PettyCash from './Pages/PettyCash';
import PettyCashAdd from './Pages/PettyCash/Add';

function App() {

	const [ globalItem, setGlobalItem ] = useState(itemsArr);
	// const [ globalItem, setGlobalItem ] = useState([]);

	const value = { globalItem, setGlobalItem };

	return (
		<>
		<BrowserRouter>
			<UserContext.Provider value={value}>
				<Routes>
					<Route path="/" element={<Timer />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/item" element={<Item />} />
					<Route path="/pettycash" element={<PettyCash />} />				
					<Route path="/pettycash-add" element={<PettyCashAdd />} />				
						{/* <Route path="/item/:id" element={<Item />} /> */}
						{/* <Route path="/footer/:id/:page" element={<Footer />} /> */}
				</Routes>
			</UserContext.Provider>	
		</BrowserRouter>
		</>
	);
}

export default App;
