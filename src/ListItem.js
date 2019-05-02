import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	render() {
		let startDate = `${this.props.dates.start.slice(5, 7)}/${this.props.dates.start.slice(8, 10)}`;
		let endDate = `${this.props.dates.end.slice(5, 7)}/${this.props.dates.end.slice(8, 10)}`;
		return (
			<div className="ListItem">
				<button className="ListItem-Button">
					<p>
						{this.props.musicalName} - {this.props.venue}
					</p>
					<p className="ListItem-Dates">
						{startDate} - {endDate}
					</p>
				</button>
			</div>
		);
	}
}

export default ListItem;
