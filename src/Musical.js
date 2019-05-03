import React, { Component } from 'react';
import './Musical.css';

class Musical extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: null,
			year: null,
			composer: null,
			spotifyURL: null
		};
	}
	render() {
		return (
			<div>
				<div className="Musical">
					<p className="Musical-Name">Into the Woods (1986)</p>
					<p className="Musical-Composer">Stephen Sondheim</p>
					<p className="Musical-Wikipedia">
						<a href="https://www.wikipedia.org">Learn More</a>
					</p>
				</div>
				<div>
					<h2>Tracklist</h2>
					<iframe
						title="SpotifyPlayer"
						src="https://open.spotify.com/embed/album/27nr57gugCPjxQIFFz2uK3"
						width="380"
						height="380"
						frameBorder="0"
						allowtransparency="true"
						allow="encrypted-media"
					/>
				</div>
			</div>
		);
	}
}

export default Musical;
