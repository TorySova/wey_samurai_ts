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
				<Post message={"Hello! It`s my new App!"} likeCounter={5}/>
				<Post message={"Today I'm happy"} likeCounter={10}/>
				<Post message={"Welcome!"} likeCounter={15}/>
			</div>
		</div>
	</div>
}

export default MyPosts;