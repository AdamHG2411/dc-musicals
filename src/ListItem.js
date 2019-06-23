import React, { Component } from 'react';
import Musical from './Musical.js';
import './ListItem.css';

class ListItem extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			selected: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		evt.preventDefault();
		let selected = !this.state.selected;
		this.setState({ selected });
	}

	render() {
		console.log('ListItem: render');
		function formattedDate(iso) {
			return `${iso.slice(5, 7)}/${iso.slice(8, 10)}/${iso.slice(0, 4)}`;
		}
		let moreInfo;
		if (this.state.selected) {
			moreInfo = (
				<div>
					<Musical {...this.props} />
				</div>
			);
		} else {
			moreInfo = null;
		}
		return (
			<div className="ListItem">
				<button className="ListItem-Button" onClick={this.handleClick}>
					<p>{this.props.musicalName}</p>
					<p>{this.props.venueName}</p>
					<p className="ListItem-Dates">{`${formattedDate(this.props.dates.start)} - ${formattedDate(
						this.props.dates.end
					)}`}</p>
				</button>
				{moreInfo}
			</div>
		);
	}
}

export default ListItem;
