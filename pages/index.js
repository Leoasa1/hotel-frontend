import React from 'react';
import Search from '../components/search/Search';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';


export default function Home() {
	return (
		<div>
			<div className='hero min-h-screen'>
				<div className='hero-content flex flex-col w-3/4'>
					<h4>Welcome to Hotel Deluxe </h4>
					<h1 className='neuton text-6xl'>A Best Place to Stay</h1>
					<div className='flex flex-row gap-2 mb-5'>
						<FaStar size={20} />
						<FaStar size={20} />
						<FaStar size={20} />
						<FaStar size={20} />
					</div>
					<div className='bg-search p-8 w-full rounded-xl border'>
						<div className='text-center border-b-2 pb-8 mb-8'>
							<h3 className='font-medium text-3xl'>
								Search for Rooms
							</h3>
						</div>
						<Search />
					</div>
				</div>
			</div>

			<div className='container mx-auto mb-20'>
				<div className='flex flex-col items-center gap-5'>
					
					<h1 className='font-[700] text-[36px]'>Our Fine Dinning</h1>
					
					<div className='border w-[154px]  bg-[#CBCBCB] mb-5'></div>
					
					<div className='flex flex-col gap-5'>
						<Image src='/images/roof.jpg' width={1188} height={605} />
						<div className='flex gap-5'>
							<Image src='/images/resturant.jpg' width={584} height={380} />
							<Image src='/images/green-sitting.jpg' width={588} height={380} />
						</div>
					</div>

					<h1 className='font-[700] text-[36px] mt-5'>Relax by the Pool</h1>
					
					<div className='border w-[154px]  bg-[#CBCBCB] mb-5'></div>
					
					<Image src='/images/pool.jpg' width={1190} height={360} />
				</div>
			</div>
		</div>
	);
}
