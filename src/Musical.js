import React, { Component } from 'react';
import './Musical.css';

class Musical extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.name,
			year: this.year,
			composer: this.composer,
			spotifyURL: this.spotifyURL
		};
	}
	render() {
		return (
			<div className="Musical">
				<h2>Musical</h2>
			</div>
		);
	}
}

export default Musical;
