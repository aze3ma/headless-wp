import React, { Component } from 'react';
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default App;
