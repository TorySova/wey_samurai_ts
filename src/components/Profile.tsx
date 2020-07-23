import React from 'react';
import s from'./Profile.module.css';

const Profile = () => {
	return <div className={s.content}>
		<div>
			<img src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" />
		</div>
		<div>
			ava + discription
    </div>
		<div>
			My posts
      <div>
				New post
      </div>
		</div>
		<div className={s.posts}>
			<div className={s.item}>
				Post 1
    	</div>
			<div className={s.item}>
				Post 2
    	</div>
		</div>
	</div>
}

export default Profile;