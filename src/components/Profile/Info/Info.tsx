import React from 'react';
import s from './Info.module.css';

const Info = () => {
	return (
		<div className={s.item}>
			<div className={s.images}>
				<img src="https://image.freepik.com/free-photo/_1232-2082.jpg" />
			</div>
			<div className={s.photo}>
				<img src="https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg" />
			</div>
			<div className={s.info}>
				<div>
					<h2> Chandler Bing</h2>
				</div>
				<div className={s.status}>
					
				</div>
			</div>
		</div>
	)

}

export default Info;