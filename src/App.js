import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Venue from './Venue.js';
import Musical from './Musical.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			sortedData: null,
			listedPerformances: [],
			selection: null
		};
		this.render = this.render.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleSelection = this.handleSelection.bind(this);
	}
	handleSelection() {
		this.setState({ selection: document.querySelector('.selected') });
		console.log(this.state.selection);
	}
	render() {
		return (
			<div className="App">
				<h1 className="App-Header">DC Musicals</h1>
				<div className="App-Body">
					<div className="App-UpcomingList">
						<h2>Upcoming Performances</h2>
						<List
							onChange={this.handleSelection}
							listedPerformances={this.state.listedPerformances}
							className="App-PerformanceList"
						/>
					</div>
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
	componentDidMount() {
		fetch('https://musicals-api.herokuapp.com/api/performances/')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ data: data });
			})
			.then(() => {
				if (this.state.data !== null) {
					this.setState({
						sortedData: this.state.data.sort(function(a, b) {
							let keyA = new Date(a.dates.start);
							let keyB = new Date(b.dates.start);
							if (keyA < keyB) return -1;
							if (keyA > keyB) return 1;
							return 0;
						})
					});
					for (let i = 0; i < this.state.sortedData.length; i++) {
						this.state.listedPerformances.push({ performance: this.state.sortedData[i], key: i });
					}
				}
			});
	}
}
export default App;
