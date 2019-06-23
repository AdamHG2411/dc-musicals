import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			performanceData: [],
			venueData: null,
			musicalData: null
		};
	}

	render() {
		console.log('App: render');
		let performanceList;
		if (this.state.performanceData) {
			performanceList = (
				<div className="App-List">
					{this.state.performanceData.map((performance) => (
						<ListItem {...performance} key={performance._id} />
					))}
				</div>
			);
		} else {
			performanceList = <h2>Loading...</h2>;
		}
		return (
			<div className="App">
				<header className="App-Header">
					<h1>DC Musicals</h1>
				</header>
				<main className="App-Body">{performanceList}</main>
			</div>
		);
	}
	componentDidMount() {
		console.log('App: componentDidMount');
		axios.get('https://musicals-api.herokuapp.com/api/performances/').then((performances) => {
			console.log(performances);
			let performanceData = performances.data
				.filter((performance) => {
					let performanceEnd = new Date(performance.dates.end);
					let today = new Date();
					return performanceEnd >= today;
				})
				.sort(function(a, b) {
					let keyA = new Date(a.dates.start);
					let keyB = new Date(b.dates.start);
					if (keyA < keyB) return -1;
					if (keyA > keyB) return 1;
					return 0;
				});
			console.log(performanceData);
			this.setState({ performanceData });
		});
	}
}
export default App;
