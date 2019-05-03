import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}
	render() {
		let buttons = [];

		if (this.state.data !== null) {
			let sortedData = this.state.data.sort(function(a, b) {
				let keyA = new Date(a.dates.start);
				let keyB = new Date(b.dates.start);
				if (keyA < keyB) return -1;
				if (keyA > keyB) return 1;
				return 0;
			});
			for (let i = 0; i < sortedData.length; i++) {
				sortedData[i].key = i;
				buttons.push(sortedData[i]);
			}
			return (
				<div className="List">
					<h2>Upcoming Performances</h2>
					{buttons.map((button) => <ListItem {...button} />)}
				</div>
			);
		} else {
			return (
				<div className="List">
					<h2>Upcoming Performances</h2>
					<p>Loading</p>
				</div>
			);
		}
	}

	componentDidMount() {
		fetch('https://musicals-api.herokuapp.com/api/performances/').then((res) => res.json()).then((data) => {
			this.setState({ data: data });
		});
	}
}

export default List;
