import localFont from "next/font/local";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "300", "500", "700", "900"],
});

export const metadata = {
	title: "Mark's Portfolio",
	description: "Get to know the Software Engineer",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
