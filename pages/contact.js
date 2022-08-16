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
						<div className='dropdown dropdown-hover  relative w-full p-3 rounded-box border border-[#B7B7B7] shadow-lg'>
							<div className='flex items-center justify-between px-3'>
								<label className='m-1' htmlFor="">Cancellation</label>
								<VscChevronDown size={25}/>
							</div>
							<ul className='dropdown-content p-2 menu shadow rounded-box absolute top-full left-1/2 transform -translate-x-1/2  w-full bg-white'>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							</ul>
					</div>
					
					<div className='dropdown dropdown-hover relative w-full p-3 rounded-box border border-[#B7B7B7] shadow-lg'>
							<div className='flex items-center justify-between px-3'>
								<label className='m-1' htmlFor="">Check-in & Check-out</label>
								<VscChevronDown size={25}/>
							</div>
							<ul className='dropdown-content p-2 menu shadow rounded-box absolute top-full left-1/2 transform -translate-x-1/2  w-full bg-white'>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							</ul>
					</div>
					
					<div className='dropdown dropdown-hover relative w-full p-3 rounded-box border border-[#B7B7B7] shadow-lg'>
							<div className='flex items-center justify-between px-3'>
								<label className='m-1' htmlFor="">Review Booking</label>
								<VscChevronDown size={25}/>
							</div>
							<ul className='dropdown-content p-2 menu shadow rounded-box absolute top-full left-1/2 transform -translate-x-1/2  w-full bg-white'>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							<li>
								<Link href=''>
									<a>1</a>
								</Link>
							</li>
							</ul>	
					</div>
					
					</div>
				</div>
			</div>
	)
};

export default contact;
