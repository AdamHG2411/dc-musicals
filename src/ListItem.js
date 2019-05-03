import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	constructor() {
		super();
		this.state = {
			selected: false
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(evt) {
		evt.preventDefault();
		console.log(evt.target);
		console.log(document.querySelectorAll('.selected'));
		for (let i = 0; i < document.querySelectorAll('.selected').length; i++) {
			if (document.querySelectorAll('.selected')[i].classList.contains('selected')) {
				document.querySelectorAll('.selected')[i].classList.remove('selected');
			}
		}
		if (evt.target.classList.contains('selected') === false) {
			evt.target.classList.add('selected');
		}
	}
	render() {
		return (
			<div className="ListItem">
				<button className="ListItem-Button" onClick={this.handleClick}>
					<p>{this.props.musicalName}</p>
					<p>{this.props.venueName}</p>
					<p className="ListItem-Dates">{`${this.props.dates.start.slice(
						5,
						7
					)}/${this.props.dates.start.slice(8, 10)} - ${this.props.dates.end.slice(
						5,
						7
					)}/${this.props.dates.end.slice(8, 10)}`}</p>
				</button>
			</div>
		);
	}
}

export default ListItem;
