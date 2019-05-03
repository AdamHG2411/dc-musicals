import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	render() {
		return (
			<div className="ListItem">
				<button className="ListItem-Button">
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
