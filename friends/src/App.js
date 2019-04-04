import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => {
				this.setState({ friends: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	addNewFriend = (name, age, email) => {
		console.log(name, age, email);
	};

	render() {
		return (
			<div className="App">
				<FriendsList friends={this.state.friends} addNewFriend={this.addNewFriend} />
			</div>
		);
	}
}

export default App;
