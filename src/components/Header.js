import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1 className="logo">
			<a href="">Headless WP</a>
		</h1>
		<nav className="navbar">
			<ul className="navbar__list list list-pipe-separator">
				<li className="navbar__item">
					<NavLink to="/" exact activeStyle={{ color: 'red' }} className="Navnavbar__link">
						Home
					</NavLink>
				</li>
				<li className="navbar__item">
					<NavLink to="/posts" exact activeStyle={{ color: 'red' }} className="navbar__link">
						Posts
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
