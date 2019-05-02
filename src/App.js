import React from 'react';
import './App.css';
import List from './List.js';
import Venue from './Venue.js';
import Musical from './Musical.js';

function App() {
	return (
		<div className="App">
			<h1 className="App-Header">DC Musicals</h1>
			<div className="App-Body">
				<List className="App-PerformanceList" />
				<div className="App-SelectedPerformance">
					<Venue className="App-SelectedVenue" />
					<Musical className="App-SelectedMusical" />
				</div>
			</div>
		</div>
	);
}

export default App;
