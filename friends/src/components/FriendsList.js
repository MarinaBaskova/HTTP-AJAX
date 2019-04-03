import React, { Component } from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
	console.log(props);
	if (props.friends.length > 0) {
		return (
			<div className="friendsWrapper">
				{props.friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
			</div>
		);
	}
	return <h3>Loading..</h3>;
};

export default FriendsList;
