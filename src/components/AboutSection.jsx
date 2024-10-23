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
				<li>The Ohio State University, College of Engineering</li>
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
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl-gap-16 sm:py-16 xl:px-16">
				<Image src={aboutImage} width={500} height={500} />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg ">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
						explicabo rem facere eius officiis impedit inventore modi amet
						nostrum ducimus! Aliquam, ipsa. Doloremque tempora odio amet labore
						autem ipsum aliquam! Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Provident voluptatibus reiciendis blanditiis
						dignissimos adipisci molestiae illum illo harum minima sed.
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
