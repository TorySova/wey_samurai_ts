import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {


	let postData = [
		{ message: "Hello! It`s my new App!", id: 1, likeCounter: 5 },
		{ message: "Today I'm happy", id: 2, likeCounter: 18 },
		{ message: "Welcome", id: 3, likeCounter: 10 },
	]

	let postElements = postData.map(it => <Post message={it.message} likeCounter={it.likeCounter} /> )

	return (
		<div className={s.elem}>
			<div className={s.block}>
				What's new?
				<div>
					<textarea placeholder="Enter your message" className={s.textarea} maxLength={124} />
					<button className={s.button}>Add post</button>
				</div>
				<div className={s.posts}>
					{postElements}
				</div>
			</div>
		</div>
	)
}

export default MyPosts;