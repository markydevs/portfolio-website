"use client";
import React, { useTransition, useState } from "react";
import aboutImage from "/public/logo1.png";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>NextJS</li>
				<li>React</li>
				<li>Python</li>
				<li>Java</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul>
				<li>
					The Ohio State University, College of Engineering – B.S. in Computer
					Science and Engineering
				</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl-gap-16 sm:py-16 xl:px-16">
				<Image src={aboutImage} width={500} height={500} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg ">
						I'm a dedicated full-stack web developer focused on building
						seamless and responsive applications. With a foundation in
						JavaScript, React, Firebase, Python, Java, Node.js, HTML, and CSS, I
						bring versatility to each project. I’m driven by a continuous
						pursuit of learning and improving my skills, and I thrive in
						collaborative environments where I can contribute to meaningful,
						user-focused applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							className="list-disc pl-2"
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							className="list-disc pl-2"
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							{" "}
							Education{" "}
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
