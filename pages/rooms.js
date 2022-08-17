import React from 'react';
import RoomCard from '../components/roomCard/RoomCard';
import Search from '../components/search/Search';

const rooms = () => {
	return (
		<div className='container mx-auto'>
			<h3 className='text-4xl my-5'>Choose Your Room</h3>
			<div className='my-14'>
				<Search />
			</div>
			<RoomCard />
		</div>
	);
};

export default rooms;
