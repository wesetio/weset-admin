import React from 'react'
import {motion} from 'framer-motion';

// type Props = {}

const LiveProjects = () => {

  return (
    <>
    <motion.div className='flex gap-x-10 h-40 items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
        <div className='flex flex-col items-center'>
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
        </div>
    </motion.div>
    </>
  )
}

export default LiveProjects