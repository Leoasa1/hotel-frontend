import { React, useState} from 'react';
import axios from 'axios'
import Link from "next/link"
import { useRouter } from 'next/router' 
import moment from 'moment'

const Search = () => {
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [data, setData] = useState([])
	
	const router = useRouter()
	const url = 'https://leoasa.herokuapp.com/booking/search?checkin=1660485600000&checkout=1661004000000'
	
	const submitSearch = (e) => {
		e.preventDefault();

		fetch(url, {
      headers: {
          'Accept': 'application/json',
      },
  }).then((response) => response.json()
      .catch(err => {
          console.err(`'${err}' happened!`);
          return {};
      }))
      .then((json) => {
          console.log('parsed json: ', json);
          setData(json)
      })
      .catch((err) => { console.log('fetch request failed: ', err) }
        
		)

		console.log(data)

		// console.log(data.rooms)
		// const d = JSON.stringify(data.rooms)
		// console.log(d)
		
			
		router.push({
			pathname: `/list`,
			query:{checkIn,checkOut}
		})
		// console.log(`from ${checkIn} to ${checkOut}`);
		
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



export default Search ;
