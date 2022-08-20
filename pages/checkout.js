import React, { useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import axios from 'axios'
import moment from "moment"


function checkout() {

  const [first_name, setFirst_Name] = useState('')
  const [last_name, setLast_Name] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [room_type, setRoomType] = useState("Premium")
  const [bed, setBed] = useState("King")
  // const [check_in, setCheckIn] = useState(Instamp);
  // const [check_out,setCheckOut] = useState(Outstamp);

  const router=useRouter()
  const { checkIn, checkOut } = router.query;
 
  let CheckIntime = new Date(checkIn);
  let Instamp = CheckIntime.getTime();
  console.log(Instamp);
  
  
  let CheckOuttime = new Date(checkOut);
	let Outstamp = CheckOuttime.getTime();
	console.log(Outstamp)
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(first_name,last_name,phone,email,checkIn,checkOut);

    // axios.post('https://leoasa.herokuapp.com/booking', {
    //   first_name:"John",
    //     last_name:"Lee",
    //     email:"John@gmail.com",
    //     phone:"23123",
    //     check_in:"2020-4-10",
    //     check_out:"2020-4-11",
    //     room_type:"Standard",
    //     bed:"King"
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    fetch('https://leoasa.herokuapp.com/booking/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name:"John",
        last_name:"Lee",
        email:"John@gmail.com",
        phone:"23123",
        check_in:"1660485600000",
        check_out:"1661004000000",
        room_type:"Standard",
        bed:"King"
      }).then(response => response.json())

    });

    // setTimeout(() => {
    //   router.push("/")
    // }, 3000);
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

        <div className='bg-[#F9F9F9] p-5 flex flex-col gap-10 '>
            
            <form method='post' className='flex justify-start flex-wrap p-10 gap-10'>
              <div className='flex flex-col'>
                <label>First Name</label>
                <input type="text" value={first_name} className='rounded-[5px] p-1 outline-none' onChange={(e)=>setFirst_Name(e.target.value)} />
              </div>

              
              <div className='flex flex-col'>
                <label>Last Name</label>
                <input type="text" value={last_name} className='rounded-[5px] p-1 outline-none' onChange={(e)=>setLast_Name(e.target.value)}/>
              </div>

              
              <div className='flex flex-col'>
                <label>Phone</label>
                <input type="text" value={phone} className='rounded-[5px] p-1 outline-none' onChange={e=>setPhone(e.target.value)}/>
              </div>

              
              <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" value={email} className='rounded-[5px] p-1 outline-none' onChange={e=>setEmail(e.target.value)} />
                </div>
                
                <div className='flex'>
                  <button onClick={handleBack} className='bg-secondary rounded-[5px] px-14 py-2 mr-10'>Back</button>

                  <button type='submit' onSubmit={onSubmit} className='bg-primary rounded-[5px] px-4'>Complete Booking</button>
           </div>
            </form>

            

          </div>

          <div className='bg-[#F9F9F9]'>
            <Image src="/images/staff.jpg" width={550} height={300} className="object-cover cursor-pointer" />
            <div className='p-2 flex flex-col gap-5 text-[16px]'>
                <b className='text-[18px]'>{ room_type} Room, 1 {bed} Bed</b>
              <span>
                <b className='mr-2'>Check-in: </b>{checkIn}
              </span>
              <span>
                <b>Check-out:</b>{checkOut}
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