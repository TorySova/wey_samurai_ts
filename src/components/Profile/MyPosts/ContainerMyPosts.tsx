import React from 'react';
import { addPostAC, changeNewTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

// type MyPostsPropsType = {
// 	store: Store<CombinedState<{
// 		profilePage: ProfilePageType;
// 		dialogsPage: DialogsPageType;
// 	}>, ActionTypes>
// }

const ContainerMyPosts = () => {
	return (
		<StoreContext.Consumer>{
			(store) => {
				const state = store.getState();
				const addPost = () => {
					if (state.profilePage.newPostText.trim() !== "") {
						store.dispatch(addPostAC(state.profilePage.newPostText))
					}
				}			
				let newTextHeandler = (text: string) => {
					store.dispatch(changeNewTextAC(text))
				}
				return <MyPosts updateNewPostText={newTextHeandler}
					addPost={addPost}
					posts={state.profilePage.posts}
					newPostText={state.profilePage.newPostText} />
			}
		}
		</StoreContext.Consumer>
	)
}

export default ContainerMyPosts;