import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const Card3 = () => {
    return (
      <>
        <motion.div 
          className="flex bg-white border-2 border-slate-400 rounded-md w-96 hover:cursor-pointer hover:shadow-md"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <div className='px-5 py-4'>
            <h5 className='text-sm font-medium'>Unique</h5>
            <h3 className='text-2xl font-bold'>1-of-1</h3>
            <button className="btn btn-sm btn-outline no-animation mt-3 mb-2">Create now</button>
            <p className='text-sm'>List your entire property with a single NFT</p>
          </div>
          <div>
            {/* <p>create</p> */}
          </div>


        </motion.div>
      </>
    );
};

export default Card3;
