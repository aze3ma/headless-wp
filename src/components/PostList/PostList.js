import React, { Component } from 'react';
import axios from 'axios';
import PostItem from '../PostItem/PostItem';
import './PostList.css';

class PostList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			const posts = res.data;
			this.setState({ posts });
		});
	}

	renderPostList() {
		return this.state.posts.map(post => <PostItem key={post.id} {...post} />);
	}

	render() {
		return (
			<div className="posts">
				<ul className="posts__list">
					<li className="posts__item">{this.renderPostList()}</li>
				</ul>
			</div>
		);
	}
}

export default PostList;
