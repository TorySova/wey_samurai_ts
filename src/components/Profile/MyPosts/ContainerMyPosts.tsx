import React from 'react';
import { addPostAC } from '../../../redux/profileReducer';
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
	}
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
	return {
		addPost: (newPostText: string) => {
			dispatch(addPostAC(newPostText))
		}
	}
}

const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerMyPosts;