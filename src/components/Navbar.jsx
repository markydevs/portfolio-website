"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logoImage from "/public/logo2.png";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
	{ title: "About", path: "#about" },
	{ title: "Projects", path: "#projects" },
	{ title: "Contact", path: "#contact" },
];

export const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 border border-white bg-[#121212] bg-opacity-100">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
				<Link href="/">
					<Image
						src={logoImage}
						alt="coding-w/hustle"
						width={100}
						height={100}
						className="text-2xl md:text-5xl text-white font-semibold"
					/>
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};
