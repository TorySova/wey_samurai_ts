import React from 'react';
import { addPostAC, changeNewTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootStateType, ProfilePageType } from '../../../redux/store';
import { ActionTypes } from '../../../redux/dialogsReducer';

// export type PropsType = {
//     state: ProfilePageType
//     dispatch: (action: ActionTypes) => void
// }

const mapStateToProps = (state: RootStateType) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
	return {
		addPost: () => {
			dispatch(addPostAC())
		},
		updateNewPostText: (text: string) => {
			dispatch(changeNewTextAC(text))
		}
	}
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerMyPosts;