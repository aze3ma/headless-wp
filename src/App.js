import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PostList from './components/PostList/PostList';
import './App.css';
import PostItem from './components/PostItem/PostItem';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/posts" component={PostList} />
					<Route path="/posts/:id" component={PostItem} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
