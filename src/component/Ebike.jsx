import React from 'react'
import Card from '../shared/Card'
import Universal from '../assets/PNG/Universal.png'
import Brampton from '../assets/PNG/Brampton.png'

function Ebike() {
  return (
    <div className='flex justify-center items-center  flex-col xl:flex-row xl:gap-5 xl:ml-[20rem] '>
      <Card heading={'Universal eBike Kit '} img={Universal} price={'Price'} priceDollar={'$750,00'} order={'Order'}/>
      <Card heading={'Brampton eBike Kit'} img={Brampton} price={'Price'} priceDollar={'$750,00'} order={'Order'}/>
      <Card className='opacity-10'  heading={'Additional eBike Kit'} img={Universal} price={'Price'} priceDollar={'$250,00'} order={'Order'}/>
    </div>
  )
}

export default Ebike