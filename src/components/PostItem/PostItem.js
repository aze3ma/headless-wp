import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const PostItem = ({ post, match }) => {
// 	console.log('Post: ', post);
// 	console.log('Match: ', match);
// 	return (
// 		<article className="post">
// 			<h2 className="post__title">
// 				<Link to="/posts/:id">{post.title}</Link>
// 			</h2>
// 			<p className="post__body">{post.body}</p>
// 		</article>
// 	);
// };

class PostItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {},
		};
	}

	componentDidMount() {
		// const { match: { params } } = this.props.match;
		// axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => {
		// 	const post = res.data;
		// 	this.setState({ post });
		// });
	}

	render() {
		console.log(this.state);
		console.log('props', this.props);
		return (
			<article className="post">
				<h2 className="post__title">
					<Link to="/posts/:id">{this.props.post.title}</Link>
				</h2>
				<p className="post__body">{this.props.post.body}</p>
			</article>
		);
	}
}

export default PostItem;
