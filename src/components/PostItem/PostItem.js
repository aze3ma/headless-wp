import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post, match }) => {
	console.log('Post: ', post);
	console.log('Match: ', match);
	return (
		<article className="post">
			<h2 className="post__title">
				<Link to="/posts/:id">{post.title}</Link>
			</h2>
			<p className="post__body">{post.body}</p>
		</article>
	);
};

export default PostItem;
