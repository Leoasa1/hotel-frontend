import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router'
import { FaUser, FaThLarge, FaWifi, FaBed } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';

const RoomCard = () => {

	
	const router = useRouter()
	const { checkIn, checkOut } = router.query;


	const handleClick = () => {

		router.push({
			pathname: `/checkout`,
			query:{checkIn,checkOut}
		})
	}

	const handleClick2 = () => {
		router.push({
			pathname: `/item`,
			query:{checkIn,checkOut}
		})
	}
	console.log(checkIn,checkOut)
	return (
	
		<div onClick={handleClick2}  className='card lg:card-side bg-base-100 shadow-xl border cursor-pointer'>
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
					1 Standard Room, 1 King Bed
				</h2>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-row gap-4'>
						<FaThLarge size={20} />
						360 Sq ft
					</div>
					<div className='flex flex-row gap-4'>
						<FaUser size={20} />
						Sleeps 2
					</div>
					<div className='flex flex-row gap-4'>
						<FaBed size={20} />1 king Bed
					</div>
					<div className='flex flex-row gap-4'>
						<FaWifi size={20} />
						Free Wifi
					</div>
				</div>
				<div className='card-actions justify-end'>
					<button onClick={handleClick} className='btn bg-primary border-info px-20'>
						Book
					</button>
				</div>
			</div>
				</div>
		
	);
};

export default RoomCard;
