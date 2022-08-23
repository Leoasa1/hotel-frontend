import { React, useContext, useEffect, useState} from 'react';
import axios from 'axios'
import Link from "next/link"
import { useRouter } from 'next/router' 
import moment from 'moment'
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';


const Search = () => {
	const [checkIn, setCheckIn] = useState('');
	const [checkOut, setCheckOut] = useState('');
	const [bed, setBed] = useState('');
	const [room,setRoom]=useState('')
	const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
	const { dispatch } = useContext(SearchContext)

	const router = useRouter()
	const url = 'https://leoasa.herokuapp.com/booking/search?checkin=1660485600000&checkout=1661004000000'

	const submitSearch = (e) => {
		e.preventDefault();

		setLoading(true);
			fetch(url, {
				headers: {
						'Accept': 'application/json',
				},
		}).then((response) => response.json()
				.catch(err => {
						setError(err)
				}))
				.then((json) => {
						console.log('parsed json: ', json);
					setData(json.rooms)
				})
				.catch(
					(err) => { console.log('fetch request failed: ', err) }
				)
		setLoading(false)
		
		 // bed
		 const b = Object.keys(data)
		// console.log(b);
		setBed(b)
	 
	 
		 // room_type
		//  const array = Object.values(data)
		//  const rt = array[0].rooms
		//  const Rt = Object.keys(rt)
		//  console.log(Rt)
	
		
		dispatch({type:"NEW_SEARCH",payload:{check_in:checkIn,check_out:checkOut}})
		router.push({
			pathname: `/list`,
			query:{bed}
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
		)
		
};



export default Search ;
