import React from 'react';
import Info from './Info/Info';
import ContainerMyPosts from './MyPosts/ContainerMyPosts';

// type PropsType = {
// 	store: Store<CombinedState<{
// 		profilePage: ProfilePageType;
// 		dialogsPage: DialogsPageType;
// 	}>, ActionTypes>
// }

const Profile = () => {
	return (
		<div>
			<Info />
			<ContainerMyPosts/>
		</div> 
	)
}

export default Profile;