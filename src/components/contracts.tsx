import React from 'react'
import Card from './card'
import {motion} from 'framer-motion';

// type Props = {}

const Contracts = () => {

  return (
    <>
      <motion.div className='flex gap-x-10 h-20 items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {/* <div className='flex flex-col items-center'>
          <span className='font-bold'>0</span>
          <span className='font-semibold'>Total Mainnet Contracts</span>
        </div>
        <div className='flex flex-col items-center border-x'>
          <span className='font-bold'>0</span>
          <span className='font-semibold'>Total NFTs Sold</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-bold'>0</span>
          <span className='font-semibold'>Unique Collectors</span>
        </div> */}
      </motion.div>
    <div className='grid grid-cols-3 gap-7 mt-10'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

    </div>
    </>
  )
}

export default Contracts