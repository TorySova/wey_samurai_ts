import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';
import {PostsType, ActionTypes} from '../../redux/state'

type PropsType = {
	posts: Array<PostsType>
	// addPost: (postText: string) => void
	// changeNewText: (newText: string) => void
	message: string
	dispatch: (action: ActionTypes) => void
}

const Profile = (props: PropsType) => {
	return (
		<div>
			<Info />
			<MyPosts posts={props.posts} 
				// addPostCallback={props.addPost}
				// changeNewText={props.changeNewText}
				message={props.message}
				dispatch={props.dispatch}/>
		</div> 
	)
}

export default Profile;