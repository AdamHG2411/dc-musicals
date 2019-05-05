import React, { Component } from 'react';
import './Venue.css';

class Venue extends Component {
	constructor(props) {
		super(props);
		this.render = this.render.bind(this);
	}
	render() {
		console.log('Venue: render');

		if (this.props.venueData) {
			return (
				<div className="Venue">
					<div className="Venue-Info">
						<p className="Venue-Name">{this.props.venueData.name}</p>
						<p>{this.props.venueData.location.street}</p>
						<p>{this.props.venueData.location.city}</p>
					</div>
					<div className="Venue-Tickets">
						<p className="Venue-TicketCost">
							Approx. ${this.props.selection.tickets.min} - ${this.props.selection.tickets.max}
						</p>
						<a className="Venue-GetTickets" href={`${this.props.selection.tickets.buy}`}>
							Get Tickets
						</a>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Venue;
