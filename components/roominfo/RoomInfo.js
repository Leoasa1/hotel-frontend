import React from 'react'
import { FaWheelchair, FaShower,FaUser, FaThLarge, FaWifi, FaBed } from 'react-icons/fa'
import { GiForkKnifeSpoon } from "react-icons/gi";
import Image from 'next/image';
function RoomInfo() {
  return (
    <div className='container mx-auto flex gap-20'>
    <div className='flex flex-col gap-5'>
      <h1 className='text-[28px] font-[500]'>
        Room amenities
      </h1>

      <div className='flex gap-5'>
        <FaWheelchair size={20} />
        <div className='flex flex-col justify-between gap-2'>
          <span className='font-[500] text-[20px]'>Accessibility</span>
          <ul className='list-disc font-[400] text-[16px]'>
            <li>Grab bar near toilet</li>
            <li>Wheelchair accessible</li>
          </ul>
        </div> 
      </div>

      <div className='flex gap-5'>
        <FaWheelchair size={20} />
        <div className='flex flex-col justify-between gap-2'>
          <span className='font-[500] text-[20px]'>Entertainment</span>
          <ul className='list-disc font-[400] text-[16px]'>
            <li>55-inch LCD TV</li>
            <li>Netflix</li>
            <li>Premium TV channels</li>
            <li>Streaming services</li>
          </ul>
        </div> 
      </div>

      <div className='flex gap-5'>
        <FaShower size={20} />
        <div className='flex flex-col justify-between gap-2'>
          <span className='font-[500] text-[20px]'>Bathroom</span>
          <ul className='list-disc font-[400] text-[16px]'>
            <li>Bathrobes</li>
            <li>Designer toiletries</li>
            <li>Hair dryer</li>
            <li>Shower/tub combination</li>
            <li>Towels</li>
          </ul>
        </div> 
      </div>

      <div className='flex gap-5'>
        <GiForkKnifeSpoon size={20} />
        <div className='flex flex-col justify-between gap-2'>
          <span className='font-[500] text-[20px]'>Food and drink</span>
          <ul className='list-disc font-[400] text-[16px]'>
            <li>Coffee/tea maker</li>
            <li>Free bottled water</li>
          </ul>
        </div> 
      </div>
      
      </div>
      
      <div className='flex flex-1 flex-col gap-10'>
        <Image src="/images/resturant.jpg" width={700} height={452} />
        <Image src="/images/resturant.jpg" width={700} height={452} />

    </div>

    </div>




  )
}

export default RoomInfo