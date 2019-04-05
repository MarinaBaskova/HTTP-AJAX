import React, { Component } from 'react';

class FriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newFriend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	handleChanges = (e) => {
		this.setState({
			newFriend: {
				...this.state.newFriend,
				[e.target.name]: e.target.value
			}
		});
	};

	handleNewFriendSubmit = (e) => {
		e.preventDefault();
		this.props.addNewFriend(this.state.newFriend);
		this.setState({
			newFriend: {
				name: '',
				age: '',
				email: ''
			}
		});
	};

	render() {
		return (
			<div className="formWrapper">
				<form onSubmit={this.handleNewFriendSubmit}>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.newFriend.name}
						onChange={this.handleChanges}
						required
					/>
					<input
						type="number"
						name="age"
						placeholder="age"
						value={this.state.newFriend.age}
						onChange={this.handleChanges}
						required
					/>
					<input
						type="email"
						name="email"
						plaƒceholder="email"
						value={this.state.newFriend.email}
						onChange={this.handleChanges}
						required
					/>
					<button>Add Friend</button>
				</form>
			</div>
		);
	}
}

export default FriendForm;
