import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import { ProfileType } from '../Profile';
import s from './Info.module.css';
import { ProfileStatus } from './ProfileStatus';
import userPhoto from '../../../assets/images/unnamed.png'

export type InfoPropsType = {
	profile: ProfileType | null
	status: string
    updateUserStatus: (status: string) => void
}

const Info = (props: InfoPropsType) => {
	if (!props.profile) {
		return <div className={s.preloader}>
			<Preloader />
			</div>
	}
	return (
		<div className={s.container}>
			<div className={s.imagesBackground}>
				{/* {props.profile?.photos.large ? <img src={props.profile.photos.large} /> : null} */}
				<img src="https://image.freepik.com/free-photo/_1232-2082.jpg" />
			</div>

			<div className={s.info}>
				<div className={s.photoAva}>
					{props.profile?.photos.small ? <img src={props.profile.photos.small} /> : <img src={userPhoto} /> }
					{/* <img src="https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg" /> */}
				</div>
				<div className={s.text}>
					<div className={s.name}>
						{props.profile.fullName}
					</div>
					<div className={s.status}>
						<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Info;