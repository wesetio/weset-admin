import React from 'react'
import { motion } from 'framer-motion';

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
          <span className='font-bold'>4</span>
          <span className='font-semibold'># Properties</span>
        </div>
        <div className='flex flex-col items-center border-x'>
          <span className='font-bold'>47</span>
          <span className='font-semibold'>NFTs Sold</span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-bold'>30</span>
          <span className='font-semibold'>Collectors</span>
        </div>
      </motion.div>
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
          </div>

          <div className="divider">Collectors</div> */}


      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
                      <input type="checkbox" className="checkbox" />
                    </label> */}
              </th>
              <th>Name</th>
              <th>Type</th>
              <th>Minted</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">I.T. Building</div>
                    <div className="text-sm opacity-50">Playa del Carmen</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">WEEKLY</span>
              </td>
              <td>33/52</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Super Spiritual Apartment</div>
                    <div className="text-sm opacity-50">Tulum</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">MONTHLY</span>
              </td>
              <td>3/12</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Penthouse Chingon</div>
                    <div className="text-sm opacity-50">Cancun</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">1-of-1</span>
              </td>
              <td>0/1</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Urban Living</div>
                    <div className="text-sm opacity-50">CDMX</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">Monthly</span>
              </td>
              <td>11/12</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          {/* <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </tfoot> */}

        </table>
      </div>


    </>
  )
}

export default LiveProjects