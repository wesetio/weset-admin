import React from 'react'
import Card from './card'
import { motion } from 'framer-motion';
import Card2 from './card2';
import Card3 from './card3';

// type Props = {}

const Contracts = () => {

  return (
    <>
      <div className='flex gap-x-10 h-28 items-center justify-center'
      >
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
        <Card />
        <Card2 />
        <Card3 />

      </div>
    </>
  )
}

export default Contracts