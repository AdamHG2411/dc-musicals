import React from 'react';
import './App.css';
import List from './List.js';
import Venue from './Venue.js';
import Musical from './Musical.js';

function App() {
	return (
		<div className="App">
			<h1>DC Musicals</h1>
			<List />
			<Venue />
			<Musical />
		</div>
	);
}

export default App;
