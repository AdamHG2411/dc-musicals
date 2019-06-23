import React from 'react';
import './Musical.css';

function Musical(props) {
	return (
		<div className="Musical">
			<p>
				{props.musicalName} ({props.musicalYear})
			</p>
			<p>{props.musicalComposer}</p>
			<p>{props.venueName}</p>
			<p>{props.venueAddress}</p>
			<p>{props.venueCity}</p>
			<iframe
				title="SpotifyPlayer"
				src={`https://open.spotify.com/embed/album/${props.musicalSpotify}`}
				width="380"
				height="380"
				frameBorder="0"
				allowtransparency="true"
				allow="encrypted-media"
			/>
		</div>
	);
}

export default Musical;
