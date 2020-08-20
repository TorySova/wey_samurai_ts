import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';
import {PostsType} from '../../redux/state'

type PropsType = {
	posts: Array<PostsType>
	addPost: (postText: string) => void
	message: string
	changeNewText: (newText: string) => void
}

const Profile = (props: PropsType) => {
	return (
		<div>
			<Info />
			<MyPosts posts={props.posts} 
				addPostCallback={props.addPost}
				message={props.message}
				changeNewText={props.changeNewText}/>
		</div> 
	)
}

export default Profile;