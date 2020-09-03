import React from 'react';
import { ProfilePageType, DialogsPageType } from '../../../redux/store';
import { addPostAC, changeNewTextAC } from '../../../redux/profileReducer';
import { ActionTypes } from '../../../redux/dialogsReducer';
import MyPosts from './MyPosts';
import { Store, CombinedState } from 'redux';

type MyPostsPropsType = {
	store: Store<CombinedState<{
		profilePage: ProfilePageType;
		dialogsPage: DialogsPageType;
	}>, ActionTypes>
}

const ContainerMyPosts = (props: MyPostsPropsType) => {
	const state = props.store.getState();

	const addPost = () => {
		if (state.profilePage.newPostText.trim() !== "") {
			props.store.dispatch(addPostAC(state.profilePage.newPostText))
		}
	}

	let newTextHeandler = (text: string) => {
		props.store.dispatch(changeNewTextAC(text))
	}

	return (
		<MyPosts updateNewPostText={newTextHeandler}
			addPost={addPost}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText} />
	)
}

export default ContainerMyPosts;