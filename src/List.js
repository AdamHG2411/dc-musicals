import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './List.css';

class List extends Component {
	render() {
		let sampleObject = {
			musicalName: 'Hamilton',
			venue: 'Kennedy Center',
			dates: {
				start: '2019-03-21T00:00:00.000Z',
				end: '2019-05-19T00:00:00.000Z'
			}
		};
		return (
			<div className="List">
				<h2>Upcoming Performances</h2>
				<ListItem {...sampleObject} />
			</div>
		);
	}
}

export default List;
