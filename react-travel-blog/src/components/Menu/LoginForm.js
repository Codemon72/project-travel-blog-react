import React, { useState } from "react";

const LoginForm = ({ logIn, errorMessage }) => {
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

	const handleLogIn = (e) => {
		e.preventDefault();
		logIn({ username, password });
	};

	return (
		<div
			id="login-form"
			className="bg-white shadow-md rounded px-8 pt-4 pb-8 text-left w-1/3"
		>
			<h2 className="text-center text-2xl text-teal-800 font-bold pb-4">
				Login
			</h2>
			<form onSubmit={handleLogIn}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="username"
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
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-6 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						onChange={changePassword}
						placeholder="******************"
						required
					/>
				</div>
				{errorMessage && (
					<div className="mb-6 text-red-700 text-sm">{errorMessage}</div>
				)}
				<div className="flex items-center justify-between">
					<button
						className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
