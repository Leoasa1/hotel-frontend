import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useRouter } from 'next/router';

export const Layout = ({ title, description, keywords, children }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Navbar />
			<div>{children}</div>
			{router.pathname === '/contact' ? <></> : <Footer />}
		</div>
	);
};

Layout.defaultProps = {
	title: "Hotel Reservation",
	description: "Online reservation for a hotel.",
	keywords: "hotel, room reservation, online reservation",
};
