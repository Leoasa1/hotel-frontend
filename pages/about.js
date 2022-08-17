import React from 'react';
import Image from "next/image"

const about = () => {
	return (
		<div className='mb-20'>
			<div className='w-full p-20 bg-cover bg-no-repeat bg-center bg-[url("/images/about-bg.jpg")] mb-10'>
				<div className='container mx-auto'>
					<div className='flex flex-col items-center justify-center text-white'>
						<span className='inter font-[400] text-[20px]'>Hotel Delux</span>
						<span className='neuton font-[700] text-[64px]'>About Us</span>
					</div>
				</div>
			</div >

			<div className='container mx-auto'>
				<div className='inter flex flex-col items-center'>
					<b className='text-[40px] font-[500]'>To Know About Our Luxury Story</b>
					<div className='flex gap-10 justify-center p-10'>
						<Image src="/images/staff.jpg" width={326} height={489} />
						<div className="flex-1 font-[400] text-[20px]">
							<p>
								The past one hundred years. Numerous honors 
								have been given to Hotel Deluxe in recognition 
								of its unwavering dedication to service and 
								unwavering corporate philosophy, which 
								make it the gold standard of hospitality 
								both in our hotels and in our communities.
							</p>
							<br />
							<p>
							The genuine attention and comfort of our guests is our top priority at Hotel Deluxe. We promise to offer the best amenities and personalized service to all of our visitors, ensuring that they always experience a welcoming, carefree, but elegant atmosphere.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default about;
