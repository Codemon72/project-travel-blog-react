import React, { useState, useEffect, useContext } from "react";
import contactLogo from "../../assets/img/contact-bubble.png";
import addImage from "../../assets/img/hinzufuegen_weiß.png";
import Appcontext from "../../AppContext";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import firebase from "firebase";

const Menu = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [userPhoto, setUserPhoto] = useState(null);
	const [showLogin, setShowLogin] = useState(false);
	const { setSelected } = useContext(Appcontext);

	useEffect(() => {
		firebase
			.auth()
			.setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(() => {
				firebase.auth().onAuthStateChanged((userAuth) => {
					setError(null);
					setUser(userAuth);
					userAuth ? setUserPhoto(userAuth.photoURL) : setUserPhoto(null);
				});
			});
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
			setSelected(null);
		} catch (e) {
			setError(e.message);
		}
	};

	const toggleLoginForm = () => {
		setShowLogin(!showLogin);
	};

	return (
		<nav className="relative h-32 bg-teal-900 header__nav-container">
			<div className="side_1">
				<Link to="/" onClick={() => setSelected(null)}>
					<div className="flex items-center flex-shrink-0 text-white header__logo_title">
						<svg
							className="fill-current h-8 w-8 mr-2 "
							width="54"
							height="54"
							viewBox="0 0 54 54"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M43.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
						</svg>
						<span className="font-semibold text-3xl tracking-tight header__title">
							Travel Time
						</span>
					</div>
				</Link>
				<Link to="/contact" className="header__contact">
					<img src={contactLogo} alt="" className="w-16 h-16" title="Contact" />
				</Link>
			</div>
			<div className="side_2">
				{!user && (
					<button
						onClick={toggleLoginForm}
						className="flex items-center cursor-pointer inline-block text-sm px-4 lg:mr-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
					>
						<i className="fas fa-sign-in-alt pr-2"></i>
						<p>Login</p>
					</button>
				)}

				{user && (
					<div className="flex items-center header_right">
						<div className="flex items-center">
							<img
								className="w-12 h-12 mx-4 md:w-14 md:h-14 border border-teal-900 border-4 rounded-full header__avatar"
								src={userPhoto ? userPhoto : ""}
								alt="Avatar of the current user"
							/>
							<div
								id="current-user"
								className="text-sm px-4 lg:mr-2 py-2 leading-none text-white font-bold text-2xl header__user"
							>
								Hi, {user.displayName ? user.displayName : "Reisender"}
							</div>

							<Link
								to="/new"
								className="text-sm cursor-pointer px-2 mr-2 my-2 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-600 hover:bg-white"
							>
								<img
									className="w-4 h-4 mx-2 inline"
									src={addImage}
									alt="Button to add a block post"
									title="Add a Blog"
								/>
								<div className="inline">
									Add <span className="font-bold uppercase">new</span> post
								</div>
							</Link>
						</div>
						<Logout
							logOut={handleLogOut}
							disableLoginWindow={toggleLoginForm}
						/>
					</div>
				)}
			</div>
			<div className="congrats">Congratulations! You've reached the end of our responsiveness!</div>

			{!user && showLogin && (
				<LoginForm logIn={handleLogIn} errorMessage={error} />
			)}
		</nav>
	);
};

export default Menu;
