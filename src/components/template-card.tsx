import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';

const TemplateCard = () => {
    return (
      <>
        <motion.div 
          className="flex bg-white border-2 border-base-100 rounded-md w-96 hover:cursor-pointer"
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // transition={{ delay: 0.5 }}
        >
          <div className='px-5 py-4'>
            <h5 className='text-sm'>BASE</h5>
            <h3 className='text-2xl'>WEEKLY</h3>
            <button className="btn btn-outline mt-4 mb-2">Create now</button>
            <p>Most rentable token standard</p>
          </div>
          <div>
            {/* <p>create</p> */}
          </div>


        </motion.div>
      </>
    );
};

export default TemplateCard;
