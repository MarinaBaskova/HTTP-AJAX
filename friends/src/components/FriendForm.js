import React, { Component } from 'react';

class FriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			email: ''
		};
	}
	handleChanges = (e) => {
		if (e.target.name === 'name') {
			this.setState({ name: e.target.value });
		}
		if (e.target.name === 'age') {
			this.setState({ age: e.target.value });
		}
		if (e.target.name === 'email') {
			this.setState({ email: e.target.value });
		}
	};
	submitFriend = (e) => {
		e.preventDefault();
		this.props.addNewFriend(this.state.name, this.state.age, this.state.email);
		this.setState({ name: '', age: '', email: '' });
		console.log('Form Submitted');
	};

	render() {
		return (
			<div className="formWrapper">
				<form onSubmit={this.submitFriend}>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="age"
						placeholder="age"
						value={this.state.age}
						onChange={this.handleChanges}
					/>
					<input
						type="text"
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChanges}
					/>
					<button>Add New Friend</button>
				</form>
			</div>
		);
	}
}

export default FriendForm;
