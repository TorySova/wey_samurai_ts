import React, { KeyboardEvent } from 'react';
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

	let postElements = props.posts.map(it => <Post key={it.id} message={it.post} likeCounter={it.likeCounter} />)

	const addPost = () => {
		if (props.newPostText.trim() !== "") {
			props.addPost()
		}
	}
	// const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
	// 	if (e.key === "Enter") {
	// 		props.addPost()
	// 	}
	// };

	let newPostElem = React.createRef<HTMLTextAreaElement>();
	let newTextHeandler = () => {
		let text = newPostElem.current ? newPostElem.current.value : ""
		props.updateNewPostText(text)
	}

	return (
		<div className={s.myPostBlock}>
			<div className={s.contentBlock}>
				<div className={s.inputBlock}>
					<textarea placeholder="What's new?"
						className={s.textarea}
						maxLength={124}
						// onKeyPress={onKeyPressHandler}
						value={props.newPostText}
						onChange={newTextHeandler}
						ref={newPostElem} />
					<div className={s.buttonBlock}>
						<button className={s.button} onClick={addPost} >Add post</button>
					</div>

				</div>

				<div className={s.posts}>
					{postElements}
				</div>
			</div>
		</div>
	)
}

export default MyPosts;