"use client";
import React from "react";
import Image from "next/image";
import heroImage from "/public/hero-img.jpg";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Mark",
								1000,
								"Web Developer",
								1000,
								"Mobile Developer",
								1000,
								"UI/UX Designer",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						voluptuous.
					</p>
					<div>
						<button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 text-white hover:bg-slate-200">
							Let's Connect
						</button>
						<button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 w-full sm:w-fit text-white mt-3">
							<span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-slate-800">
								See my work
							</span>
						</button>
					</div>
				</div>

				<div className="flex justify-center md:justify-end">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
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
