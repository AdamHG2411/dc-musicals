import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Venue from './Venue.js';
import Musical from './Musical.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			performanceData: null,
			performanceDataLoaded: false,
			sortedData: null,
			listedPerformances: [],
			selection: null,
			venueData: null,
			musicalData: null
		};
		this.render = this.render.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.updateSelection = this.updateSelection.bind(this);
	}
	updateSelection(input) {
		this.setState({ selection: input });
		fetch(`https://musicals-api.herokuapp.com/api/venues/${input.venueCode}`).then((venueResult) => {
			venueResult.json().then((venue) => {
				fetch(`https://musicals-api.herokuapp.com/api/musicals/${input.musicalName}`).then((musicalResult) => {
					musicalResult.json().then((musical) => {
						this.setState({ venueData: venue, musicalData: musical });
					});
				});
			});
		});
	}
	render() {
		console.log('App: render');
		return (
			<div className="App">
				<h1 className="App-Header">DC Musicals</h1>
				<div className="App-Body">
					<div className="App-UpcomingList">
						<h2>Upcoming Performances</h2>
						<List
							listedPerformances={this.state.listedPerformances}
							className="App-PerformanceList"
							updateSelection={this.updateSelection}
						/>
					</div>
					<div className="App-SelectedPerformance">
						<h2>Venue</h2>
						<Venue
							className="App-SelectedVenue"
							venueData={this.state.venueData}
							musicalData={this.state.musicalData}
							selection={this.state.selection}
						/>
						<h2>Musical</h2>
						<Musical className="App-SelectedMusical" musicalData={this.state.musicalData} />
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		console.log('App: componentDidMount');
		fetch('https://musicals-api.herokuapp.com/api/performances/')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ performanceData: data });
			})
			.then(() => {
				if (this.state.performanceData) {
					this.setState({
						sortedData: this.state.performanceData.sort(function(a, b) {
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
					this.setState({ performanceDataLoaded: true });
				}
			});
	}
}
export default App;
