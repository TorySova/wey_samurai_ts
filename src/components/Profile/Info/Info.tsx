import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import { ProfileType } from '../Profile';
import s from './Info.module.css';

type PropsType = {
	profile: ProfileType | null
}

const Info = (props: PropsType) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.item}>
			<div className={s.images}>
				{props.profile?.photos.large ? <img src={props.profile.photos.large} /> : null}
				{/* <img src="https://image.freepik.com/free-photo/_1232-2082.jpg" /> */}
			</div>
			<div className={s.photo}>
				{props.profile?.photos.small ? <img src={props.profile.photos.small} /> : null}
				{/* <img src="https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg" /> */}
			</div>
			<div className={s.info}>
				<div>
					<h2> {props.profile.fullName}</h2>
				</div>
				<div className={s.status}>
					{props.profile.aboutMe}
				</div>
			</div>
		</div>
	)

}

export default Info;