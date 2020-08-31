import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType, ActionTypes, addPostAC, changeNewTextAC } from '../../../redux/state';

type MyPostsPropsType = {
	posts: Array<PostsType>
	// addPostCallback: (postText: string) => void
	// changeNewText: (newText: string) => void
	message: string
	dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

	let postElements = props.posts.map(it => <Post message={it.post} likeCounter={it.likeCounter} />)

	const addPost = () => {
		props.dispatch(addPostAC(props.message));
	}

	let newPostElem = React.createRef<HTMLTextAreaElement>();
	let newTextHeandler = () => {
		let text = newPostElem.current ? newPostElem.current.value : ""
		props.dispatch(changeNewTextAC(text))
	}

	return (
		<div className={s.elem}>
			<div className={s.block}>
				What's new?
				<div>
					<textarea placeholder="Enter your message"
						className={s.textarea}
						maxLength={124}
						value={props.message}
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