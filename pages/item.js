import React from 'react'
import RoomCard from "../components/roomCard/RoomCard.js"
import { useRouter } from 'next/router';
import { FaWheelchair, FaShower,FaUser, FaThLarge, FaWifi, FaBed } from 'react-icons/fa'
import { GiForkKnifeSpoon } from "react-icons/gi";
import Image from 'next/image';
function item() {

  const router = useRouter()
  const { checkIn, checkOut } = router.query;
  const handleClick = () => {
		router.push({
      pathname: '/checkout',
      query:{checkIn,checkOut}
		})
	}

  return (
    <div>
      <div className='container mx-auto inter p-5'>
      <div className='card lg:card-side bg-base-100 shadow-xl border'>
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
					Standard Room, 1 King Bed
				</h2>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-row gap-4'>
						<FaThLarge size={20} />
						250 Sq ft
					</div>
					<div className='flex flex-row gap-4'>
						<FaUser size={20} />
						Sleeps 2
					</div>
					<div className='flex flex-row gap-4'>
						<FaBed size={20} />1 King Bed
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

        <div className='my-20'>

          <div className='container mx-auto flex gap-20'>
          <div className='flex flex-col gap-5 '>
            <h1 className='text-[32px] font-[500]'>
              Room amenities
            </h1>

            <div className='flex gap-5'>
              <FaWheelchair size={20} />
              <div className='flex flex-col justify-between gap-2'>
                <span className='font-[500] text-[20px]'>Accessibility</span>
                <ul className='list-disc px-5 font-[400] text-[16px]'>
                  <li>Grab bar near toilet</li>
                  <li>Wheelchair accessible</li>
                </ul>
              </div> 
            </div>

            <div className='flex gap-5'>
              <FaWheelchair size={20} />
              <div className='flex flex-col justify-between gap-2'>
                <span className='font-[500] text-[20px]'>Entertainment</span>
                <ul className='list-disc px-5 font-[400] text-[16px]'>
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
                <ul className='list-disc px-5 font-[400] text-[16px]'>
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
                <ul className='list-disc px-5 font-[400] text-[16px]'>
                  <li>Coffee/tea maker</li>
                  <li>Free bottled water</li>
                </ul>
              </div> 
            </div>
            
            </div>
            
            <div className='flex flex-col gap-10'>
              <Image src="/images/resturant.jpg" width={700} height={452} />
              <Image src="/images/resturant.jpg" width={700} height={452} />

          </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default item