import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = () => {
	return (
		<div>
			<Info />
			<MyPosts />
		</div>
	)
}

export default Profile;