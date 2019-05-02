import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './List.css';

class List extends Component {
	render() {
		return (
			<div className="List">
				<h2>This is a header</h2>
				<ul>
					<ListItem />
				</ul>
			</div>
		);
	}
}

export default List;
