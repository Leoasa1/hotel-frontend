import React from 'react'
import Image from 'next/image'

function checkout() {
  return (
    <div className='inter'>
      <div className='container mx-auto '>
        <div className='p-10 flex flex-col gap-5'>
         <h1 className='font-[700] text-[32px]'>Online Booking</h1>
        <div className='flex justify-between gap-5'>

        <div className='bg-[#F9F9F9] p-10 flex flex-col gap-10'>
            
            <div className='flex justify-start flex-wrap gap-10'>
              <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" className='rounded-[5px] p-1 outline-none' />
              </div>

              
              <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" className='rounded-[5px] p-1 outline-none' />
              </div>

              
              <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" className='rounded-[5px] p-1 outline-none' />
              </div>

              
              <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" className='rounded-[5px] p-1 outline-none' />
              </div>
            </div>

            <div className='flex'>
              <button className='bg-secondary rounded-[5px] px-14 py-2 mr-10'>Back</button>

              <button className='bg-primary rounded-[5px] px-4'>Complete Booking</button>
           </div>

          </div>

          <div className='bg-[#F9F9F9]'>
            <Image src="/images/staff.jpg" width={550} height={300} className="object-cover cursor-pointer" />
            <div className='p-2 flex flex-col gap-5 text-[16px]'>
              <b className='text-[18px]'>Standard Room, 1 King Bed</b>
              <span>
                <b>Check-in: </b>Aug 17, 2022 
              </span>
              <span>
                <b>Check-out:</b> Aug 24, 2022
              </span>
              <div className='flex justify-between gap-10'>
                <div className=' flex flex-col '>
                  <span>1 room x 1 night</span>
                  <b>Total:</b>
                </div>
                <div className=' flex flex-col'>
                  <span>$135.00</span>
                  <span>$270.00</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default checkout