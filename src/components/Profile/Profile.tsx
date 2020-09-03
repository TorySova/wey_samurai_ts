import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';
import {PostsType, ProfilePageType, DialogsPageType} from '../../redux/store'
import { ActionTypes } from '../../redux/dialogsReducer';
import { Store, CombinedState } from 'redux';
import ContainerMyPosts from './MyPosts/ContainerMyPosts';

type PropsType = {
	store: Store<CombinedState<{
		profilePage: ProfilePageType;
		dialogsPage: DialogsPageType;
	}>, ActionTypes>
}

const Profile = (props: PropsType) => {
	return (
		<div>
			<Info />
			<ContainerMyPosts store={props.store}/>
		</div> 
	)
}

export default Profile;