import React, { Component } from 'react';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<Header />
				<Routes />
				<Footer />
			</div>
		);
	}
}

export default App;
