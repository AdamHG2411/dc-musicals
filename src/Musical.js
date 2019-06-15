import React, { Component } from 'react';
import './Musical.css';

class Musical extends Component {
	constructor(props) {
		super(props);
		this.render = this.render.bind(this);
	}
	render() {
		console.log('Musical: render');
		if (this.props.musicalData) {
			return (
				<div>
					<div className="Musical">
						<p className="Musical-Name">
							{this.props.musicalData.name} ({this.props.musicalData.premiereYear})
						</p>
						<p className="Musical-Composer">{this.props.musicalData.composer}</p>
					</div>
					<div>
						<h2>Tracklist</h2>
						<iframe
							title="SpotifyPlayer"
							src={`https://open.spotify.com/embed/album/${this.props.musicalData.spotifyURL}`}
							width="380"
							height="380"
							frameBorder="0"
							allowtransparency="true"
							allow="encrypted-media"
						/>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Musical;
