import React, { Component } from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = (props) => {
	if (props.friends.length > 0) {
		return (
			<div className="friendsWrapper">
				{props.friends.map((friend) => <Friend key={friend.id} friend={friend} />)}
				<FriendForm addNewFriend={props.addNewFriend} />
			</div>
		);
	}
	return <h3>Loading..</h3>;
};

export default FriendsList;