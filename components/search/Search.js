import { React, useState } from 'react';

const Search = () => {
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');

	const submitSearch = (e) => {
		e.preventDefault();
		console.log(`from ${checkIn} to ${checkOut}`);
	};

	return (
		<form
			className='inter flex flex-row gap-8 justify-between items-stretch'
			onSubmit={submitSearch}
		>
			<div className='w-full'>
				<label>Check-in</label>
				<input
					type='date'
					value={checkIn}
					className='input input-bordered w-full'
					onChange={(e) => setCheckIn(e.target.value)}
				></input>
			</div>
			<div className='w-full'>
				<label>Check-out</label>
				<input
					type='date'
					value={checkOut}
					className='input input-bordered w-full'
					onChange={(e) => setCheckOut(e.target.value)}
				></input>
			</div>
			<div className='w-full self-end'>
				<button
					className='btn bg-primary w-full border-info'
					type='submit'
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
