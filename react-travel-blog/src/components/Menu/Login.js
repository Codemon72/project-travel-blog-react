import React, { useState } from "react";
// import app from "../../Auth";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const changeUsername = (event) => {
		const value = event.currentTarget.value;
		setUsername(value);
	};

	const changePassword = (event) => {
		const value = event.currentTarget.value;
		setPassword(value);
	};

	// const login = (event) => {
	// 	event.preventDefault();
	// 	app
	// 		.auth()
	// 		.signInWithEmailAndPassword(username, password)
	// 		.then(() => {
	// 			console.log("success");
	// 		})
	// 		.catch((error) => {
	// 			var errorCode = error.code;
	// 			var errorMessage = error.message;
	// 			// document.getElementById(
	// 			// 	"errorMessage"
	// 			// ).innerHTML = `<p class="text-red-500 text-xs italic">Username and password don´t match.</p>`;
	// 		});
	// };

	// document.getElementById("loginForm").addEventListener("submit", login);

	// auth.onAuthStateChanged((userAuth) => {
	// 	this.setState({ user: userAuth });
	// });

	return (
		<div
			id="login-form"
			className="bg-white shadow-md rounded px-8 pt-4 pb-8 text-left"
		>
			<h2 className="text-center text-2xl text-teal-800 font-bold pb-4">
				Login
			</h2>
			<form>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						for="username"
					>
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="email"
						onChange={changeUsername}
						placeholder="name@example.com"
						required
					/>
				</div>
				<div>
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						for="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						onChange={changePassword}
						placeholder="******************"
						required
					/>
				</div>
				<div className="mb-6" id="errorMessage"></div>
				<div className="flex items-center justify-between">
					<button
						className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						// onSubmit={login}
					>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
