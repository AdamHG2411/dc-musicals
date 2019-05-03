import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Venue from './Venue.js';
import Musical from './Musical.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="App-Header">DC Musicals</h1>
				<div className="App-Body">
					<h2>Upcoming Performances</h2>
					<List className="App-PerformanceList" />
					<div className="App-SelectedPerformance">
						<h2>Venue</h2>
						<Venue className="App-SelectedVenue" />
						<h2>Musical</h2>
						<Musical className="App-SelectedMusical" />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
