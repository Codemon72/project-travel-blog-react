import React from "react";
import contactPicture from "../../assets/img/contact-image.jpg";

const Contact = () => {
	return (
		<main>
			<div className="lg:flex mx-5 md:mx-24 lg:mx-5 xl:mx-0 bg-teal-600">
				<div className="mb-8 lg:mb-0 lg:w-1/2 flex h-auto justify-center items-center">
					<img
						className="border-4 rounded-lg"
						src={contactPicture}
						alt=""
						width="500"
					/>
				</div>

				<div className="lg:w-1/2 lg:px-16 lg:pt-12">
					<h2 className="px-2 pt-1 lg:px-0 lg:pt-0 lg:pb-8 text-white font-semibold text-3xl lg:text-5xl tracking-tight">
						Hi, we are ...
					</h2>
					<div
						id="header-text"
						className="px-2 pt-1 lg:px-0 lg:pt-0 lg:pb-8 text-white text-2xl lg:text-3xl tracking-tight"
					>
						... Clemens and Christoph. We are developers in the making based in
						Hamburg. One of our passions, besides Frontend Development, is to
						discover new places and landscapes, to get to know other cultures or
						just to think outside the box. We are two of the participants of the
						<span className="hover:text-black">
							<a href="https://hamburgcodingschool.com/" target="_blank" rel="noopener noreferrer">
								Hamburg Coding School
							</a>
						</span>
						. This site is a React project we created as part of our web
						development education. It is still in progress and new features will
						follow.
						<br />
						<br />
						<span className="font-semibold">Contact Details:</span> <br />
						<div className="flex">
							<div className="w-1/2">
								Clemens Bruesch <br />
								Wetteringe 6, 21029 Hamburg <br />
								clemens.bruesch@gmail.com <br />
								0151 / 20294061 <br />
							</div>
							<div className="w-1/2">
								Christoph Pöllmann <br />
								Hohenesch 1, 22765 Hamburg <br />
								christophpoellmann@web.de <br />
								0152 / 55426340 <br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Contact;
