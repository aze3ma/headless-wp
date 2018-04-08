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
					<Route path="/" exact strict component={Home} />
					<Route path="/posts" exact strict component={PostList} />
					<Route path="/posts/:id" exact strict component={PostItem} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
