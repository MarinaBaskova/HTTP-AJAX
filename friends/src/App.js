import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Home from './components/Home';
import UpdateForm from './components/UpdateForm';
import FriendForm from './components/FriendForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			activeFriend: null
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
	//add friend
	addNewFriend = (newFriend) => {
		axios
			.post('http://localhost:5000/friends', newFriend)
			.then((res) => {
				this.setState({ friends: res.data });
				console.log(res);
				// redirect
				this.props.history.push('/friends-list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getActiveFriend = (friend) => {
		this.setState({ activeFriend: friend });
	};

	// update friend
	updateFriend = (updatedFriend) => {
		axios
			.put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
			.then((res) => {
				console.log(res);
				this.setState({ friends: res.data });
				this.props.history.push('/friends-list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//delete friend
	deleteFriend = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res) => {
				console.log(res);
				this.setState({ friends: res.data });
				//redirect
				this.props.history.push('/friends-list');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<nav>
					<div className="navLinks">
						<NavLink exact to="/new-friend">
							Add Frined
						</NavLink>
						<NavLink exact to="/">
							Home
						</NavLink>
						<NavLink to="/friends-list">Friends</NavLink>
					</div>
				</nav>
				<Route exact path="/" component={Home} />
				<Route exact path="/friends-list" render={() => <FriendsList friends={this.state.friends} />} />
				<Route
					path="/friends-list/:id"
					render={(props) => (
						<Friend
							{...props}
							friends={this.state.friends}
							deleteFriend={this.deleteFriend}
							getActiveFriend={this.getActiveFriend}
						/>
					)}
				/>
				<Route
					path="/new-friend"
					render={(props) => <FriendForm {...props} addNewFriend={this.addNewFriend} />}
				/>
				<Route
					path="/update-friend"
					render={() => (
						<UpdateForm updateFriend={this.updateFriend} activeFriend={this.state.activeFriend} />
					)}
				/>
			</div>
		);
	}
}

export default App;
