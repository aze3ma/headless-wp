import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import PostItem from './components/PostItem';

const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/posts" component={PostList} />
		<Route path="/posts/:id" component={PostItem} />
	</Switch>
);

export default Routes;
