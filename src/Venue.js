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
			let name = this.props.venueData.name ? this.props.venueData.name : 'error';
			let address = this.props.venueData.location.street ? this.props.venueData.location.street : 'error';
			let city = this.props.venueData.location.city ? this.props.venueData.location.city : 'error';
			let minCost = this.props.selection.tickets.min ? this.props.selection.tickets.min : 'error';
			let maxCost = this.props.selection.tickets.max ? this.props.selection.tickets.max : 'error';
			let buyTix = this.props.selection.tickets.buy ? this.props.selection.tickets.buy : 'error';
			return (
				<div className="Venue">
					<div className="Venue-Info">
						<p className="Venue-Name">{name}</p>
						<p>{address}</p>
						<p>{city}</p>
					</div>
					<div className="Venue-Tickets">
						<p className="Venue-TicketCost">
							Approx. ${minCost} - ${maxCost}
						</p>
						<a className="Venue-GetTickets" href={`${buyTix}`}>
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
