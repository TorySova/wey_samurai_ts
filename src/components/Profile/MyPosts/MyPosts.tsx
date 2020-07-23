import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return <div className={s.elem}>
		<div className={s.block}>
			My posts
      <div>
				<textarea placeholder="Enter your message" className="inputText" />
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	</div>
}

export default MyPosts;