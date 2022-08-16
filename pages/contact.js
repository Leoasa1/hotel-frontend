import { IoMdMail }  from 'react-icons/io';
import { AiFillPhone } from "react-icons/ai";
import { VscChevronDown } from "react-icons/vsc";
import Link from 'next/link'


const contact = () => {
	return (
		<div className='bg-white mb-20'>
			<div className='w-full p-10 bg-bottom bg-cover bg-[url("/images/contact-bg.jpg")]'>
				<h1 className='neuton flex justify-center items-center text-white font-[700] text-[64px]' >Contact</h1>
			</div>
			<div className='flex justify-between text-black '>
					<div className='inter flex flex-col justify-center gap-[20px] p-20'>
						<h1 className=' font-[500] text-[32px] text-black '>Contact</h1>

						<div className='flex flex-col'>
							<div className='flex items-center gap-[10px]'>
							<AiFillPhone size={25}/>
							<h2 className='font-[500] text-[24px]'>Phone</h2>
						</div>
							<span className='font-[400] text-[20px]'>888-888-888</span>
						</div>

						<div className='flex flex-col'>
							<div className='flex items-center gap-[10px]'>
							<IoMdMail size={25}/>
							<h2 className='font-[500] text-[24px]'>Email</h2>
						</div>
							<span className='font-[400] text-[20px]'>hoteldeluxe@gmail.com</span>
						</div>
					</div>

					
					
				<div className='inter flex-1 flex flex-col gap-[20px] justify-center items-center p-10 font-[500] text-[20px]'>			

					<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  					<div class="collapse-title text-xl font-medium">
								Cancellation
 						 </div>
  					<div class="collapse-content"> 
  					  <p>Change of plans? No problem. We make it easy to cancel most hotel bookings. You could contact the hotel directly and one of our staff members will cancel the booking.</p>
  					</div>
					</div>


					<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  					<div class="collapse-title text-xl font-medium">
								Check-in & check-out 
 						 </div>
  					<div class="collapse-content"> 
							<p>Here's everything you need to know to make sure you get in and out of your hotel or vacation rental without any hiccups.</p>
							<br />
							<p class='font-[700]'>All about check-in</p>
							<p>
							- You can show up any time between the check-in time listed in your itinerary and midnight. As a perk, booking with us means you won't have a problem checking in late. No need to rush!
							</p>
							<p>
							- Be sure to have your government-issued ID handy when you show up – you'll need it to check in							</p>
							<p>
							- Want to show up early, or past midnight? Be sure to give your hotel or property manager a call first.
							</p>
							<p>
							One last thing: If you decide to not show up for any reason, the hotel may still charge you. We suggest checking your hotel's Rules and Restrictions in your itinerary for details.
							</p>
							<br />
							<p class='font-[700]'>The scoop on check-out</p>
							<p>
							You can hang around up until check-out time (also in your itinerary) on the last day of your booking, then it's time to head out. Don't forget your phone charger!
							</p>
  					</div>
					</div>

					<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  					<div class="collapse-title text-xl font-medium">
								Review Booking
 						 </div>
  					<div class="collapse-content"> 
							<p>
								We make it easy to view the details of your bookings. That's why after you book, we send you a confirmation email with your itinerary number and trip details. You can also view, email, and print your itinerary right from our website
							</p>
							<span>
								You can hop over to 
							</span>
							<Link href='/'>
								<span class='primary cursor-pointer	underline underline-offset-4 decoration-[primary]'>Find your Booking </span>
							</Link>
							<span>
							to track down your booking.
							</span>
  					</div>
					</div>

				</div>
				</div>
			</div>
	)
};

export default contact;
