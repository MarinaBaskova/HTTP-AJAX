import React, { Component } from 'react';

const Friend = (props) => {
	console.log(props);
	const friend = props.friends.find((friend) => {
		return `${friend.id}` === props.match.params.id;
	});
	if (!friend) return <h3>Loading data...</h3>;

	//update friend
	const updateFriend = (e) => {
		e.preventDefault();
		props.getActiveFriend(friend);
		props.history.push('/update-friend');
	};

	//delete friend
	const deleteFriend = (e) => {
		e.preventDefault();
		props.deleteFriend(friend.id);
	};

	return (
		<div className="friendWrapper">
			<div className="card">
				<h3>Name: {friend.name}</h3>
				<p>Age: {friend.age}</p>
				<p>Email: {friend.email}</p>
			</div>
			<button onClick={updateFriend}>Update</button>
			<button onClick={deleteFriend}>Delete</button>
		</div>
	);
};
export default Friend;
