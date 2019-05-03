import React, { Component } from 'react';
import './Venue.css';

class Venue extends Component {
	render() {
		return (
			<div className="Venue">
				<div className="Venue-Info">
					<p className="Venue-Name">Ford's Theatre</p>
					<p>511 10th Street, NW</p>
					<p>Washington, DC</p>
				</div>
				<div className="Venue-Tickets">
					<p className="Venue-TicketCost">Approx. Cost: $27 - $81</p>
					<a className="Venue-GetTickets" href="https://www.fords.org">
						Get Tickets
					</a>
					{/* <button className="Venue-Tickets" href="https://www.fords.org">
						Get Tickets
					</button> */}
				</div>
			</div>
		);
	}
}

export default Venue;
