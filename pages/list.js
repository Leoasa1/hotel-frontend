import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsPerson } from "react-icons/bs"
import {FaBed} from "react-icons/fa"
import {BiWifi2} from "react-icons/bi"
import RoomCard from '../components/roomCard/RoomCard';
import { useRouter } from 'next/router'
import useFetch from '../hooks/useFetch';
function list() {

  
  const router = useRouter();
  // console.log(router.query)
  
  const { checkIn, checkOut } = router.query
 
  console.log(checkIn, checkOut, )
 
  

  return (
    <div className='inter'>
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-10 mb-20'>
          <div className='flex flex-col gap-1 font-[500] text-[20px]'>
            <h1>Choose your Room</h1>

            <span>Dates Chosen</span>

            <div className='w-[200px] flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>From</label>
              <span>{checkIn}</span>
            </div>

            <div className='w-[200px]  flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>To</label>
              <span>{ checkOut}</span>
            </div>
          </div>

       

          
          {/* {loading ? ("Loading...") : (
                <>
                  {data.map(item => (
                    <RoomCard item={item} key={item._id} />
                  ))}

                </>
          )} */}

          <RoomCard />
          <RoomCard/>
          <RoomCard/>
          <RoomCard/>
          

        </div>
      </div>
    </div>
  )
}

export default list