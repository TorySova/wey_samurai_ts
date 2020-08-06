import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../redux/state';

type MyPostsPropsType = {
	posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

	let postElements = props.posts.map(it => <Post message={it.message} likeCounter={it.likeCounter} /> )

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