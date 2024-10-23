"use client";
import React from "react";
import Image from "next/image";
import heroImage from "/public/hero-img.jpg";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
				<div className="col-span-12 md:col-span-7 place-self-center text-center md:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
							Hello, I'm{" "}
						</span>
						<TypeAnimation
							sequence={[
								"Mark",
								1000,
								"A Web Developer",
								1000,
								"A Mobile Developer",
								1000,
								"A UI/UX Designer",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						quasi.
					</p>
					<div>
						<button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 hover:bg-slate-200 text-white">
							Let's Connect
						</button>
						<button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 w-full sm:w-fit hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								See my work
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-12 md:col-span-5 place-self-center mt-6 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative mx-auto">
						<Image
							src={heroImage}
							alt="coding-w/hustle"
							className="absolute object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
