import React from 'react';

function Home(props) {
	const navigateToFriends = (e) => {
		e.preventDefault();
		props.history.push('/friends-list');
	};
	return (
		<div className="homeWrapper">
			<h2>Friends List App</h2>
			<button onClick={navigateToFriends} className="homeBtn">
				See Friends List
			</button>
		</div>
	);
}

export default Home;
