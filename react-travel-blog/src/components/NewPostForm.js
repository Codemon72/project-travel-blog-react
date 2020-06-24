import React, { useState, useEffect } from "react";
import sampleUser from "../assets/img/sample.png";
import Redirect from "./Redirect";
import firebase from "firebase";

const NewPostForm = () => {
	const initialState = {
		author: "",
		author_image: "",
		date: "",
		geo_data: {
			lat: "",
			lng: "",
		},
		image: {
			alt: "",
			src: "",
		},
		last_visited: "",
		location: {
			city: "",
			country: "",
		},
		text: "",
		title: "",
	};
	const [newBlogPost, setNewBlogPost] = useState(initialState);
	const [uploadedImage, setUploadedImage] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			//check user to handle error when logout
			user &&
				setNewBlogPost({
					...newBlogPost,
					author: user.displayName,
					author_image: user.photoURL,
					date: new Date(),
				});
			user && setUser(user);
		});
	}, []);

	const changeTitle = (event) => {
		const value = event.currentTarget.value;
		setNewBlogPost({ ...newBlogPost, title: value });
	};

	const changeCity = (event) => {
		const value = event.currentTarget.value;
		setNewBlogPost({
			...newBlogPost,
			location: { ...newBlogPost.location, city: value },
		});
	};

	const changeCountry = (event) => {
		const value = event.currentTarget.value;
		setNewBlogPost({
			...newBlogPost,
			location: { ...newBlogPost.location, country: value },
		});
	};

	const changeLat = (event) => {
		const value = parseFloat(event.currentTarget.value);
		setNewBlogPost({
			...newBlogPost,
			geo_data: { ...newBlogPost.geo_data, lat: value },
		});
	};

	const changeLng = (event) => {
		const value = parseFloat(event.currentTarget.value);
		setNewBlogPost({
			...newBlogPost,
			geo_data: { ...newBlogPost.geo_data, lng: value },
		});
	};

	const changeVisited = (event) => {
		const value = event.currentTarget.value;
		setNewBlogPost({ ...newBlogPost, last_visited: value });
	};

	const changeText = (event) => {
		const value = event.currentTarget.value;
		setNewBlogPost({ ...newBlogPost, text: value });
	};

	const changeImage = (event) => {
		const value = event.currentTarget.files[0];
		setNewBlogPost({
			...newBlogPost,
			image: { ...newBlogPost.image, src: value.name },
		});
		setUploadedImage(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const db = firebase.firestore();
		const storageRef = firebase.storage().ref();
		const metadata = { contentType: uploadedImage.file };

		db.collection("blogPosts")
			.add(newBlogPost)
			.then((docRef) => {
				storageRef
					.child("blogPics/" + uploadedImage.name)
					.put(uploadedImage, metadata);
				console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		setNewBlogPost(initialState);
	};

	return (
		<div>
			{user ? (
				<div className="w-full flex justify-center items-start ">
					<div className="flex justify-start m-4 ">
						<div>
							<div className="text-center amatic text-3xl my-4 font-bold text-white">
								New Idea? Great, enter a new Blogpost...
							</div>
							<form
								onSubmit={handleSubmit}
								className="rounded max-w-md bg-gray-300 p-8"
							>
								<div className="flex flex-wrap justify-center -mx-3 inline-block">
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="title"
										>
											Title:
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="title"
											name="title"
											type="text"
											placeholder="Enter the blog title"
											value={newBlogPost.title}
											onChange={changeTitle}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="city"
										>
											City:
										</label>
										<input
											className="appearance-none block w-full bg-white border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="city"
											name="city"
											type="text"
											title="Bitte geben Sie nur Buchstaben ein"
											placeholder="Please enter the city name"
											value={newBlogPost.location.city}
											onChange={changeCity}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="country"
										>
											Country:
										</label>
										<input
											className="appearance-none block w-full bg-white border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="country"
											name="country"
											type="text"
											title="Bitte geben Sie nur Buchstaben ein"
											placeholder="Please enter the country name"
											value={newBlogPost.location.country}
											onChange={changeCountry}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="latitude"
										>
											Latitude:
										</label>
										<input
											className="appearance-none block w-full bg-white border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="latitude"
											name="latitude"
											type="text"
											pattern="-?\d{1,3}\.\d+"
											placeholder="Please enter the countrys latitude"
											value={newBlogPost.geo_data.lat}
											onChange={changeLat}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="longitude"
										>
											Longitude:
										</label>
										<input
											className="appearance-none block w-full bg-white border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="longitude"
											name="longitude"
											type="text"
											pattern="-?\d{1,3}\.\d+"
											placeholder="Please enter the countrys longitude"
											value={newBlogPost.geo_data.lng}
											onChange={changeLng}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="lastVisited"
										>
											Last Visited:
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											id="lastVisited"
											name="lastVisited"
											type="text"
											placeholder="Enter your last visiting Date (Format: 20201102)"
											value={newBlogPost.last_visited}
											onChange={changeVisited}
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="upload"
										>
											Picture Upload:
										</label>
										<input
											onChange={changeImage}
											className="appearance-none block w-full bg-white border rounded py-3 px-4 md:mb-8 leading-tight focus:outline-none focus:bg-white"
											name="uploadBtn"
											type="file"
											required
										/>
									</div>
									<div className="w-full px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-teal-800 text-md font-bold mb-2"
											htmlFor="entry"
										>
											Blog Entry:
										</label>
										<textarea
											className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
											name="entry"
											id="entry"
											cols="30"
											rows="10"
											value={newBlogPost.text}
											onChange={changeText}
											required
										></textarea>
									</div>
									<button
										type="submit"
										className="bg-teal-800 shadow hover:bg-teal-700 text-white font-bold py-3 px-12 md:px-24 rounded-full"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
						<div className="flex flex-col px-5">
							<div>
								<div className="text-center amatic text-3xl my-4 font-bold text-white">
									Your sample post
								</div>
								<div className="w-full relative container max-w-md rounded border-4 border-white overflow-hidden justify-center bg-white">
									<img
										className="w-full"
										src="https://via.placeholder.com/800x600?text=Sample+picture"
										alt=""
									/>
									<div className="px-6 py-4">
										<div className="amatic font-bold text-4xl mb-2">
											{newBlogPost.title ? newBlogPost.title : "Dein Titel"}
										</div>
										<p className=" block text-gray-700 text-base">
											{newBlogPost.text
												? newBlogPost.text
												: "Hoodie tilde flexitarian wolf, glossier mixtape 90's schlitz prism letterpress cold-pressed church-key pop-up readymade swag. Vinyl lo-fi cold-pressed banjo swag."}
										</p>
									</div>
									<div className="px-6 py-4 flex items-center">
										<img
											className="w-10 h-10 rounded-full mr-4"
											src={sampleUser}
											alt=""
										/>
										<div className="text-sm">
											<p className="text-gray-900 leading-none">
												{newBlogPost.author}
											</p>
											<p className="text-gray-600">
												{newBlogPost.last_visited
													? newBlogPost.last_visited
													: "2020 / 06"}{" "}
												in{" "}
												{newBlogPost.location.city
													? newBlogPost.location.city
													: "Teststadt"}
												,{" "}
												{newBlogPost.location.country
													? newBlogPost.location.country
													: "Deinland"}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Redirect />
			)}
		</div>
	);
};

export default NewPostForm;
