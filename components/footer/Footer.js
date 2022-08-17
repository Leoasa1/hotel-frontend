import React from "react";
import Image from "next/image"
import Link from "next/link"



const Footer = () => {
	return (
		<footer className="inter bg-secondary">
			<div className="container mx-auto flex justify-between items-center py-2 ">
			<Link href="/">
				<Image src="/images/logo.png" alt="Hotel Deluxe" width={166} height={53} className="object-cover cursor-pointer" />
			</Link>
			<div className="text-[12px] font-[400]">
				Copyright 2022 Deluxe Hotel. All rights reserved.
			</div>
			<div className="flex justify-between gap-10 text-[16px] font-[500]">
					<Link href="/about">
					<a>About</a>
					</Link>
					<Link href="/contact">
					<a>Support</a>
					</Link>
			</div>
			</div>
		</footer>
	)
};

export default Footer;
