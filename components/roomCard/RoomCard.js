import React from 'react';
import Image from 'next/image';
import { FaUser, FaThLarge, FaWifi, FaBed } from 'react-icons/fa';

const RoomCard = () => {
	return (
		<div className='card lg:card-side bg-base-100 shadow-xl border'>
			<figure>
				<Image
					layout='intrinsic'
					src='/images/resturant.jpg'
					alt='Album'
					width={400}
					height={350}
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-3xl mb-4'>
					Standard Room, 1 King Bed
				</h2>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-row gap-4'>
						<FaThLarge size={20} />
						250 Sq ft
					</div>
					<div className='flex flex-row gap-4'>
						<FaUser size={20} />
						Sleeps 2
					</div>
					<div className='flex flex-row gap-4'>
						<FaBed size={20} />1 King Bed
					</div>
					<div className='flex flex-row gap-4'>
						<FaWifi size={20} />
						Free Wifi
					</div>
				</div>
				<div className='card-actions justify-end'>
					<button className='btn bg-primary border-info px-20'>
						Book
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
