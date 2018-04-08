import React, { Component } from 'react';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(posts => {
				this.setState({ posts: posts });
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		console.log(this.state);
		return (
			<div className="post">
				<ul className="post__list">
					<li className="post__item">
						{/* {this.state.posts.map(post => {
							return <PostItem key={post.id} post={post} />;
						})} */}
					</li>
				</ul>
			</div>
		);
	}
}

export default PostList;
