import React, { KeyboardEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostsType } from '../../../redux/store';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type MyPostsPropsType = {
	addPost: (newPostText:string) => void
	posts:PostsType[]
}

const MyPosts = (props: MyPostsPropsType) => {

	let postElements = props.posts.map(it => <Post key={it.id} message={it.post} likeCounter={it.likeCounter} />)

	const onAddPost = (values: PostFormType) => {
		props.addPost(values.newPostText)
	}
	return (
		<div className={s.myPostBlock}>
			<div className={s.contentBlock}>
				<div className={s.inputBlock}>
					<PostReduxForm onSubmit={onAddPost} />
				</div>
				<div className={s.posts}>
					{postElements}
				</div>
			</div>
		</div>
	)
}

export type PostFormType = {
	newPostText: string
}
export const PostForm: React.FC<InjectedFormProps<PostFormType>> = (props: InjectedFormProps<PostFormType>) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field placeholder="What's new?"
				name={'newPostText'}
				component={'textarea'}
				className={s.textarea}
				maxLength={124}
			/>
			<div className={s.buttonBlock}>
				<button className={s.button} >Add post</button>
			</div>
		</form>
	)
}

export const PostReduxForm = reduxForm<PostFormType>({
	form: 'NewPostForm'
})(PostForm)

export default MyPosts;