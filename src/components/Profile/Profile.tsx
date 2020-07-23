import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.images}>
				<img src="https://image.freepik.com/free-photo/_1232-2082.jpg" />
			</div>
			<Info />
			<MyPosts />
		</div>
	)
}

export default Profile;