import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import {useState} from 'react'

function Header() {
    const [isOpened , setIsOpened] = useState(false)
  return (
    <>
        <div className=' w-full flex justify-around items-center p-3 '>
            <div className='flex justify-center items-center gap-3'>
                <p className='font-bold text-3xl rounded-full h-8 w-8 bg-[#FFBD37] text-white p-6 flex justify-center items-center'>B</p>
                <p className='text-[#233348] text-[24px] font-bold'>eBike</p>
            </div>
            <div className=' '>
                <ul className='hidden xl:flex justify-center items-center gap-5 cursor-pointer'>
                    <li className='text-[##233348] text-[18px] font-bold'>Product</li>
                    <li className='text-[#7D7987] text-[18px]'>Bike type</li>
                    <li className='text-[#7D7987] text-[18px]'>About us</li>
                    <li className='text-[#7D7987] text-[18px]'>Testimonials</li>
                    <li className='text-[#7D7987] text-[18px]'>Contact</li>
                </ul>
            </div>
            {/* Mobile Nav */}

            {isOpened && <div>
                <ul className='flex bg-[#FCB72B] justify-center items-center flex-col gap-6 cursor-pointer w-screen h-screen absolute right-0 top-0 xl:hidden'>
                    <li className='text-[##233348] text-[18px] font-bold'>Product</li>
                    <li className='text-black text-[18px] xl:text-[#7D7987]'>Bike type</li>
                    <li className='text-black text-[18px] xl:text-[#7D7987]'>About us</li>
                    <li className='text-black text-[18px] xl:text-[#7D7987]'>Testimonials</li>
                    <li className='text-black text-[18px] xl:text-[#7D7987]'>Contact</li>
                </ul>
            </div>}
            <div className='xl:hidden'>
            <Hamburger  toggled={isOpened} toggle={setIsOpened} easing='ease-in' size={20} direction='left'/>
            </div>
        </div>
    </>
  )
}

export default Header