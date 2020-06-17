import React, { useState, useEffect } from "react";
import contactLogo from "../../assets/img/contact-bubble.png";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import firebase from "firebase";

const Menu = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		//firebase.auth()
		//.setPersistence(firebase.auth.Auth.Persistence.SESSION)
		//.then(() => {
		firebase.auth().onAuthStateChanged((userAuth) => {
			setError(null);
			setUser(userAuth);
		});
		//})
	}, []);

	const handleLogIn = async ({ username, password }) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(username, password);
		} catch (e) {
			setError(e.message);
		}
	};

	const handleLogOut = async () => {
		try {
			await firebase.auth().signOut();
		} catch (e) {
			setError(e.message);
		}
	};

	const [showLogin, setShowLogin] = useState(false);

	const showLoginForm = () => {
		setShowLogin(!showLogin);
	};

	return (
		<nav className="relative px-8 h-32 w-full flex flex-row justify-between items-center text-center bg-teal-900 shadow-xl">
			<div className="flex flex-row items-center">
				<Link to="/">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<svg
							className="fill-current h-8 w-8 mr-2"
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M43.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
						<span className="font-semibold text-3xl tracking-tight">
							Travel Time
						</span>
					</div>
				</Link>
				<Link to="/contact" className="hidden md:block">
					<img src={contactLogo} alt="" className="w-16 h-16" title="Contact" />
				</Link>
			</div>
			<div>
				{!user && (
					<button
						onClick={showLoginForm}
						className="cursor-pointer inline-block text-sm px-4 lg:mr-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
					>
						<p>Login</p>
					</button>
				)}
				{user && (
					<Logout logOut={handleLogOut} disableLoginWindow={showLoginForm} />
				)}
			</div>

			{!user && showLogin && <LoginForm logIn={handleLogIn} />}
		</nav>
	);
};

export default Menu;
