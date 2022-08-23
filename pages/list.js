import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsPerson } from "react-icons/bs"
import {FaBed} from "react-icons/fa"
import {BiWifi2} from "react-icons/bi"
import RoomCard from '../components/roomCard/RoomCard';
import { useRouter, withRouter } from 'next/router'
import { SearchContext } from '../context/SearchContext';
function List() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
	const url = 'https://leoasa.herokuapp.com/booking/search?checkin=1660485600000&checkout=1661004000000'

 
  const { check_in,check_out} = useContext(SearchContext); 
  console.log(check_in, check_out)

  const { bed } = router.query
  console.log(bed)

  useEffect(() => {
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

   
    
  }, [])
  


  // dispatch({type:"NEW_SEARCH",payload:{room_type:rt}})

  // bed
  const rt = Object.keys(data)
  console.log(rt);


  // room_type
  // const array = Object.values(data)
  // const bd = array[0].rooms
  // const Bd = Object.keys(bd)
  // console.log(Bd)

  


  
  

  return (loading ? ("Loading..") : (
    <>
       <div className='inter'>
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-10 mb-20'>
          <div className='flex flex-col gap-1 font-[500] text-[20px]'>
            <h1>Choose your Room</h1>

            <span>Dates Chosen</span>

            <div className='w-[200px] flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>From</label>
              <span>{ check_in}</span>
            </div>

            <div className='w-[200px]  flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>To</label>
              <span>{check_out}</span>
            </div>
          </div>

       

          
          {loading ? ("Loading...") : (
                <>
                  {rt.map(item => (
                    <RoomCard item={item} />
                  ))}

                </>
          )}

          {/* <RoomCard />
          <RoomCard/>
          <RoomCard/>
          <RoomCard/> */}
          

        </div>
      </div>
    </div>
    </>
  ))
}

export default List;