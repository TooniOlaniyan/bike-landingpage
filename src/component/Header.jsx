import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import {useState} from 'react'
import {motion , AnimatePresence} from 'framer-motion'

function Header() {
  const logoVarient = {
    initial:{
      x:-200,
    },
    final: {
      x:0,

    }
  }
  const mobileVarient = {
    initial: {
      opacity: 0,
      scale:0,
      height:'90vh',
      borderRadius: '100px',
      backgroundColor: '#944d06',
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1,
        delay: 0.2,
      },
    },
    final: {
      opacity: 1,
      scale:1,
      backgroundColor: '#e8a317',
      borderRadius: 0,
      height:'100vh',
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
      
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 5,
        delay: 0.5,
      },
    },
  }
    const [isOpened , setIsOpened] = useState(false)
  return (
    <>
      <div className=' w-full flex justify-between items-center p-3 sticky shadow-md bg-white top-0 z-40 lg:shadow-none lg:static lg:justify-center lg:gap-[14rem] lg:pt-[2rem]'>
        <motion.div
          variants={logoVarient}
          initial='initial'
          animate={'final'}
          className='flex justify-center items-center gap-3'
        >
          <p className='font-bold text-3xl rounded-full h-8 w-8 bg-[#FFBD37] text-white p-6 flex justify-center items-center'>
            B
          </p>
          <p className='text-[#233348] text-[24px] font-bold'>eBike</p>
        </motion.div>
        <motion.div animate={{ x: [2000, 0] }} className=' '>
          <ul className='hidden xl:flex justify-center items-center gap-5 cursor-pointer'>
            <li className='text-[##233348] text-[18px] font-bold'>Product</li>
            <li className='text-[#7D7987] text-[18px]'>Bike type</li>
            <li className='text-[#7D7987] text-[18px]'>About us</li>
            <li className='text-[#7D7987] text-[18px]'>Testimonials</li>
            <li className='text-[#7D7987] text-[18px]'>Contact</li>
          </ul>
        </motion.div>

        {/* Mobile Nav */}

        {isOpened && (
          <AnimatePresence>
            <motion.div
              key={1}
              className='z-20'
            >
              <AnimatePresence>
                <motion.ul
                  key={2}
                  variants={mobileVarient}
                  initial='initial'
                  animate='final'
                  exit='exit'
                  className='flex bg-[#944d06] text-[#fff] justify-center items-center flex-col gap-6 cursor-pointer w-screen h-screen absolute right-0 top-0 xl:hidden'
                >
                  <motion.li
                    animate={{ y: [-400, 0] }}
                    className='text-[#fff] text-[20px] font-bold overflow-hidden'
                  >
                    Product
                  </motion.li>
                  <motion.li
                    animate={{ y: [-300, 0] }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
                    className='text-[#fff] text-[20px] xl:text-[#7D7987] overflow-hidden'
                  >
                    Bike type
                  </motion.li>
                  <motion.li
                    animate={{ y: [-200, 0] }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 400 }}
                    className='text-[#fff] text-[20px] xl:text-[#7D7987] overflow-hidden'
                  >
                    About us
                  </motion.li>
                  <motion.li
                    animate={{ y: [-100, 0] }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                    className='text-[#fff] text-[20px] xl:text-[#7D7987] overflow-hidden'
                  >
                    Testimonials
                  </motion.li>
                  <motion.li
                    animate={{ y: [-50, 0] }}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 400 }}
                    className=' text-[20px] text-[#fff] xl:text-[#7D7987] overflow-hidden'
                  >
                    Contact
                  </motion.li>
                </motion.ul>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        )}
        <div className='xl:hidden z-30'>
          <Hamburger
            color='#944d06'
            toggled={isOpened}
            toggle={setIsOpened}
            easing='ease-in'
            size={20}
            direction='left'
          />
        </div>
      </div>
    </>
  )
}

export default Header