import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

// Pages Import
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Item from './Pages/Item';

function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/item" element={<Item />} />
				{/* <Route path="/item/:id" element={<Item />} /> */}
				{/* <Route path="/footer/:id/:page" element={<Footer />} /> */}
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
