import { useEffect, useState } from 'react';
import { API_BASE, API_KEY } from './constants/api';

import './App.css';

function App() {
	const [price, setPrice] = useState([]);

	useEffect(() => {
		fetch(API_BASE, {
			headers:{
				'Authorization' : API_KEY,
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setPrice(data);
				console.log(data)
			});
	});
	return <div></div>;
}

export default App;
