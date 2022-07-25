import React from "react";
import Head from "next/head";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

export const Layout = ({ title, description, keywords, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Navbar />
			<div className={styles["content-wrapper"]}>{children}</div>
			<Footer />
		</div>
	);
};

Layout.defaultProps = {
	title: "Hotel Reservation",
	description: "Online reservation for a hotel.",
	keywords: "hotel, room reservation, online reservation",
};
