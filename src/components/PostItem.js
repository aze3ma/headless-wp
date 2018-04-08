import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {},
		};
	}

	render() {
		const { title, body } = this.props;
		return (
			<article className="post">
				<h2 className="post__title">
					<Link to="/posts/:id">{title}</Link>
				</h2>
				<p className="post__body">{body}</p>
			</article>
		);
	}
}

export default PostItem;
