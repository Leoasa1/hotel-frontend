import React from 'react';

const Search = () => {
	return (
		<form className='inter flex flex-row gap-8 justify-between items-stretch'>
			<div className='w-full'>
				<label>Check-in</label>
				<input
					type='date'
					id='birthday'
					name='birthday'
					className='input input-bordered w-full'
				></input>
			</div>
			<div className='w-full'>
				<label>Check-out</label>
				<input
					type='date'
					id='birthday'
					name='birthday'
					className='input input-bordered w-full'
				></input>
			</div>
			<div className='w-full self-end'>
				<button className='btn bg-primary w-full border-info'>
					Search
				</button>
			</div>
		</form>
	);
};

export default Search;
