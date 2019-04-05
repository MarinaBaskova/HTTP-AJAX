import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendForm from './FriendForm';

const FriendsList = (props) => {
	if (props.friends.length > 0) {
		return (
			<div className="frinedsListWrap">
				{props.friends.map((friend) => (
					<div className="FriendCard" key={friend.id}>
						<Link to={`/friends-list/${friend.id}`}>
							<p>{friend.name}</p>
						</Link>
					</div>
				))}
			</div>
		);
	} else {
		return <h3>Loading..</h3>;
	}
};

export default FriendsList;
