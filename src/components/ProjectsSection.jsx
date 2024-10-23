"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description: "Project 1 description",
		image: "/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Photography Portfolio Website",
		description: "Project 2 description",
		image: "/projects/2.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "E-commerce Application",
		description: "Project 3 description",
		image: "/projects/3.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Food Ordering Application",
		description: "Project 4 description",
		image: "projects/4.png",
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "React Firebase Template",
		description: "Authentication and CRUD operations",
		image: "projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Full-stack Roadmap",
		description: "Project 5 description",
		image: "projects/6.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

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
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
			</div>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						decsription={project.description}
						imgUrl={project.image}
						tags={project}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
