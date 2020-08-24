import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../redux/state';

type MyPostsPropsType = {
	posts: Array<PostsType>
	addPostCallback: (postText: string) => void
	message: string
	changeNewText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

	let postElements = props.posts.map(it => <Post message={it.post} likeCounter={it.likeCounter} />)

	const addPost = () => {
		props.addPostCallback(props.message);
		props.changeNewText('')
	}

	const newTextHeandler = (e: ChangeEvent<HTMLTextAreaElement>) => { props.changeNewText(e.currentTarget.value) }

	return (
		<div className={s.elem}>
			<div className={s.block}>
				What's new?
				<div>
					<textarea placeholder="Enter your message"
						className={s.textarea}
						maxLength={124}
						value={props.message}
						onChange={newTextHeandler} />
					<button className={s.button} onClick={addPost} >Add post</button>
				</div>
				<div className={s.posts}>
					{postElements}
				</div>
			</div>
		</div>
	)
}

export default MyPosts;