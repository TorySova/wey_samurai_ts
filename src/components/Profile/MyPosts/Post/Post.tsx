import React from 'react';
import s from './Post.module.css';

const Post = () => {
	return <div className={s.posts}>
		<div className={s.item}>
			<img src="https://image.freepik.com/free-photo/_23-2147890098.jpg" />
				Post 1
    	</div>
			<div>
				<span>Like</span>
			</div>
	</div>
}

export default Post;