import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(evt) {
		evt.preventDefault();
		console.log('ListItem: handleClick');
		let selectedObj = this.props.performance;
		this.props.updateSelection(selectedObj);
	}
	render() {
		console.log('ListItem: render');
		return (
			<button className="ListItem-Button" onClick={this.handleClick}>
				<p>{this.props.performance.musicalName}</p>
				<p>{this.props.performance.venueName}</p>
				<p className="ListItem-Dates">{`${this.props.performance.dates.start.slice(
					5,
					7
				)}/${this.props.performance.dates.start.slice(8, 10)} - ${this.props.performance.dates.end.slice(
					5,
					7
				)}/${this.props.performance.dates.end.slice(8, 10)}`}</p>
			</button>
		);
	}
}

export default ListItem;
