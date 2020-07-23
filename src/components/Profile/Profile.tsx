import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

const Profile = () => {
	return (
		<div className={s.content}>
			<div className={s.images}>
				<img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" />
			</div>
			<Info />
			<MyPosts />
		</div>
	)
}

export default Profile;