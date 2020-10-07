import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
	message: string
	likeCounter: number
}

const Post = (props: PostPropsType) => {
	return <div className={s.posts}>
		<div className={s.item}>
			{/* <img src="https://image.freepik.com/free-photo/_23-2147890098.jpg" /> */}
			{props.message}
		</div>
		<div>
			<span>like {props.likeCounter}</span>
		</div>
	</div>
}

export default Post;