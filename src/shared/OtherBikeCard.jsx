import React from 'react'


function OtherBikeCard({img , bikeType}) {
  return (
    <div>
        <div className='flex justify-center gap-[1rem] items-center flex-col '>
        <div className='bg-white p-3 w-[80vw] flex justify-center hover:border-2 border-[#FCB72B] items-center shadow-md rounded-md lg:w-[15vw] '>
          <img className='w-[166px] h-[100px]' src={img} alt="" />
        </div>
          <p className='text[#233348] font-semibold'>{bikeType}</p>  
        </div> 
    </div>
  )
}

export default OtherBikeCard