import React from 'react';
import Info from './Info/Info';
import ContainerMyPosts from './MyPosts/ContainerMyPosts';

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string | null
    large: string | null
}

type PropsType = {
    profile: null | ProfileType
    setUserProfile: (profile: ProfileType) => void
}

const Profile = (props:PropsType) => {
	return (
		<div>
			<Info profile={props.profile}/>
			<ContainerMyPosts />
		</div> 
	)
}

export default Profile;