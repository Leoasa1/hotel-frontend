import React from "react";
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
	return (
		<footer className="inter bg-primary flex justify-center">
		<div className="max-w-[1024px] w-full flex justify-between items-center py-2 ">
		<Link href="/">
			<Image src="/images/logo.png" alt="Hotel Deluxe" width={166} height={53} className="object-cover cursor-pointer" />
		</Link>
			
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

export default Navbar;
