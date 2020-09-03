import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../redux/store';

type MyPostsPropsType = {
	updateNewPostText: (text: string) => void
	addPost: () => void
	posts: PostsType[]
	newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

	let postElements = props.posts.map(it => <Post message={it.post} likeCounter={it.likeCounter} />)

	const addPost = () => {
		props.addPost()
	}

	let newPostElem = React.createRef<HTMLTextAreaElement>();
	let newTextHeandler = () => {
		let text = newPostElem.current ? newPostElem.current.value : ""
		props.updateNewPostText(text)
	}

	return (
		<div className={s.elem}>
			<div className={s.block}>
				What's new?
				<div>
					<textarea placeholder="Enter your message"
						className={s.textarea}
						maxLength={124}
						value={props.newPostText}
						onChange={newTextHeandler}
						ref={newPostElem} />
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