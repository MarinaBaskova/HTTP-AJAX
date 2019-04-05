import React, { Component } from 'react';

class UpdateForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curentFriend: this.props.activeFriend
		};
	}

	handleChanges = (e) => {
		e.persist();
		this.setState((prevState) => ({
			curentFriend: {
				...prevState.curentFriend,
				[e.target.name]: e.target.value
			}
		}));
	};

	submitUpdateFriend = (e) => {
		e.preventDefault();
		this.props.updateFriend(this.state.curentFriend);
		console.log(this.state.curentFriend);
	};

	render() {
		return (
			<div>
				<h2>Update Friend</h2>
				<form onSubmit={this.submitUpdateFriend}>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.curentFriend.name}
						onChange={this.handleChanges}
						required
					/>
					<input
						type="number"
						name="age"
						placeholder="age"
						value={this.state.curentFriend.age}
						onChange={this.handleChanges}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={this.state.curentFriend.email}
						onChange={this.handleChanges}
						required
					/>
					<button>Update Friend</button>
				</form>
			</div>
		);
	}
}
export default UpdateForm;
