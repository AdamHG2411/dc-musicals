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
		if (this.props.listedPerformances.length === 0 || this.props.listedPerformances === undefined) {
			return null;
		} else {
			return (
				<div className="List">
					{this.props.listedPerformances.map((performance) => <ListItem {...performance} />)}
				</div>
			);
		}
	}
	componentDidMount() {
		if (this.props.listedPerformances.length === 0 || this.props.listedPerformances === undefined) {
			setTimeout(this.componentDidMount, 500);
			return null;
		} else {
			this.setState({ dataLoaded: true });
		}
	}
}

export default List;
