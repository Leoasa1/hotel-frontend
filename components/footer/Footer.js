import React from "react";
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="w-full flex justify-around items-center py-3 mt-20 font-[sans-serif] bg-[#3D4045] text-[white]">
			<div>
				<Image src="/images/logo.png" alt="Hotel Deluxe" width={166} height={53} className="object-cover cursor-pointer" />
			</div>
			<div className="text-[12px] font-[400]">
				Copyright 2022 Deluxe Hotel. All rights reserved.
			</div>
			<div className="flex justify-between gap-10 text-[16px] font-[500]">
				<a href="">About</a>
				<a href="">Support</a>
			</div>
		</footer>
	)
};

export default Footer;
