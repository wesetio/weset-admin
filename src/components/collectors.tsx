import React from 'react'
import { motion } from 'framer-motion';

// type Props = {}

const Collectors = () => {

  return (
    <>
      <div className='flex gap-x-10 h-28 items-center justify-center'
      >
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
        className="overflow-x-auto">
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
              <td>01/02/23</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>0xfuys65aw5612</td>
              <td>IT Building</td>
              <td>Weset</td>
              <td>01/13/23</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>0xfuys65aw5612</td>
              <td>Penthouse Chingon</td>
              <td>Maya RealEstate</td>
              <td>06/05/23</td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>0xfuys65aw5612</td>
              <td>Urban Living</td>
              <td>CDMX Desarollos</td>
              <td>09/20/23</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>0xfuys65aw5612</td>
              <td>Bahia Principe</td>
              <td>Weset</td>
              <td>02/16/23</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>0xfuys65aw5612</td>
              <td>Penthouse Chingon</td>
              <td>Maya RealEstate</td>
              <td>03/05/23</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </>
  )
}

export default Collectors