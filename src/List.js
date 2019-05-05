import React, { Component } from 'react';
import ListItem from './ListItem.js';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoaded: false
		};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	render() {
		console.log('List: render');
		if (this.props.listedPerformances) {
			return (
				<div className="List">
					{this.props.listedPerformances.map((performance) => (
						<ListItem {...performance} updateSelection={this.props.updateSelection} />
					))}
				</div>
			);
		} else {
			console.log('data not loaded');
			return null;
		}
	}
	componentDidMount() {
		console.log('List: componentDidMount');
		if (this.props.listedPerformances.length === 0 || this.props.listedPerformances === undefined) {
			return null;
		} else {
			this.setState({ dataLoaded: true });
		}
	}
}

export default List;
