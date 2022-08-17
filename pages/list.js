import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { BsPerson } from "react-icons/bs"
import {FaBed} from "react-icons/fa"
import {BiWifi2} from "react-icons/bi"
import RoomCard from '../components/roomCard/RoomCard';


function list() {
  return (
    <div className='inter'>
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-10 mb-20'>
          <div className='flex flex-col gap-1 font-[500] text-[20px]'>
            <h1>Choose your Room</h1>

            <span>Dates Chosen</span>

            <div className='w-[160px] flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>From</label>
              <span>08/21/22</span>
            </div>

            <div className='w-[160px]  flex justify-between items-center p-1 border border-solid	border-[#ACACAC]'>
              <label>To</label>
              <span>08/25/22</span>
            </div>
          </div>

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