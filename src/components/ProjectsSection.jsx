"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "Nonprofit Website",
		description: "Project 1 description",
		image: "/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/markydevs/nonprofit-site",
		previewUrl: "https://markydevs.github.io/nonprofit-site/index.html",
	},
	{
		id: 2,
		title: "Hangman Web App",
		description: "Project 2 description",
		image: "/projects/2.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/markydevs/hang_man",
		previewUrl: "https://markydevs.github.io/hang_man/",
	},
	{
		id: 3,
		title: "Firebase App (Coming Soon)",
		description: "Project 3 description",
		image: "/projects/3.png",
		tag: ["All", "Full-Stack"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Full-Stack"
					isSelected={tag === "Full-Stack"}
				/>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.3 }}>
						<ProjectCard
							key={project.id}
							title={project.title}
							decsription={project.description}
							imgUrl={project.image}
							tags={project}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
