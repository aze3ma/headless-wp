import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Layout from './components/Layout/Layout';
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route path="/" component={Layout} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
