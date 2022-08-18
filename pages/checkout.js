import React, { useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'


function checkout() {

  const [identify, setIdentify] = useState({
    Firstname: undefined,
    Lastname: undefined,
    Phone: undefined,
    email:undefined
  })
  const router=useRouter()

  const handleChange = (e) => {
    setIdentify(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(identify)
    setTimeout(() => {
      router.push("/")
    }, 3000);
  }

  const handleBack = () => {
   
    router.back();
    
  }

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
                <input type="text" id='Firstname' className='rounded-[5px] p-1 outline-none' onChange={handleChange} />
              </div>

              
              <div className='flex flex-col'>
                <label>Last Name</label>
                <input type="text" id='Lastname' className='rounded-[5px] p-1 outline-none' onChange={handleChange}/>
              </div>

              
              <div className='flex flex-col'>
                <label>Phone</label>
                <input type="number" id='Phone' className='rounded-[5px] p-1 outline-none' onChange={handleChange}/>
              </div>

              
              <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" id='email' className='rounded-[5px] p-1 outline-none' onChange={handleChange} />
              </div>
            </div>

            <div className='flex'>
              <button onClick={handleBack} className='bg-secondary rounded-[5px] px-14 py-2 mr-10'>Back</button>

              <button onClick={handleClick} className='bg-primary rounded-[5px] px-4'>Complete Booking</button>
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