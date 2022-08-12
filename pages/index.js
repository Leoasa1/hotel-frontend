import React from 'react';
import Search from '../components/search/Search';
import { FaStar } from 'react-icons/fa';

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
		</div>
	);
}
