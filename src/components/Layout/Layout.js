import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Route } from 'react-router-dom/Route';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PostList from '../PostList/PostList';

const Layout = () => (
	<div>
		<Header />
		<PostList />
		<Footer />
	</div>
);

export default Layout;
