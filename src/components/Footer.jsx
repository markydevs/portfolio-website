import React from "react";
import logoImage from "/public/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between">
				<span>
					<Link href="/">
						<Image
							src={logoImage}
							alt="coding-w/hustle"
							width={40}
							height={40}
							className=""
						/>
					</Link>
				</span>
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
