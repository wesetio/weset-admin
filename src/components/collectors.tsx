import React from 'react'
import { motion } from 'framer-motion';

// type Props = {}

const Collectors = () => {

  return (
    <>
      <motion.div className='flex gap-x-10 h-40 items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
      </motion.div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Address</th>
              <th>Property</th>
              <th>Collection</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>0xfuys65aw5612</td>
              <td>IT Building</td>
              <td>Weset</td>
              <td>1/2/23</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>0xfuys65aw5612</td>
              <td>IT Building</td>
              <td>Weset</td>
              <td>1/13/23</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>0xfuys65aw5612</td>
              <td>Penthouse Chingon</td>
              <td>Maya RealEstate</td>
              <td>6/5/23</td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>0xfuys65aw5612</td>
              <td>Urban Living</td>
              <td>CDMX Desarollos</td>
              <td>9/20/23</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>0xfuys65aw5612</td>
              <td>Bahia Principe</td>
              <td>Weset</td>
              <td>2/16/23</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>0xfuys65aw5612</td>
              <td>Penthouse Chingon</td>
              <td>Maya RealEstate</td>
              <td>3/5/23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Collectors