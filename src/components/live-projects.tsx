import React from 'react'
import { motion } from 'framer-motion';

// type Props = {}

const LiveProjects = () => {

  const shortenAddress = (walletAddrs: string) => {
    const firstFifteen = walletAddrs
      ? walletAddrs.slice(0, 15).toLowerCase()
      : "";
    const lastFour = walletAddrs
      ? walletAddrs.slice(walletAddrs.length - 5).toLowerCase()
      : "";


    return `${firstFifteen}...${lastFour}`;
  };

  return (
    <>
      <motion.div className='flex h-40 items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className='flex flex-col px-10 items-center'>
          <span className='font-bold'>4</span>
          <span className='font-semibold'># Properties</span>
        </div>
        <div className='flex flex-col px-10 items-center border-x'>
          <span className='font-bold'>47</span>
          <span className='font-semibold'>NFTs Sold</span>
        </div>
        <div className='flex flex-col px-10 items-center'>
          <span className='font-bold'>30</span>
          <span className='font-semibold'>Collectors</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
        className="overflow-x-auto">
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
              <th className='pr-10'>Fraction type</th>
              <th className='pr-10'>Total minted</th>
              <th>Contract Address</th>
              <th className='pr-10'></th>
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
                      <img src="https://bafybeifvont43sxotqptz76c6mrz5iugz5bja4atethhridtuzmlzgdwmu.ipfs.nftstorage.link/" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold pr-10">I.T. Building</div>
                    <div className="text-sm opacity-50">Playa del Carmen</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">WEEKLY</span>
              </td>
              <td className='text-sm'>33/52</td>
              <td className='text-sm pr-10'>{shortenAddress("0x71BF184230bF6D412854fffEF1fcf88E62395e8b")}</td>
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
                      <img src="https://bafybeib4oero3bxmi7m76hbtzxxsx2szbmibjjjlsmsx4fktf2bcmxlq34.ipfs.nftstorage.link/" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold pr-10">Super Spiritual Apartment</div>
                    <div className="text-sm opacity-50">Tulum</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">MONTHLY</span>
              </td>
              <td className='text-sm'>3/12</td>
              <td className='text-sm pr-10'>{shortenAddress("0x71BF184230bF6D412854fffEF1fcf88E62395e8b")}</td>
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
                      <img src="https://bafybeiaiqy4preavpmubigu4ve6n6fij34wvfgas6tqolwp3v6qy4xtwlq.ipfs.nftstorage.link/" alt="Avatar Tailwind CSS Component" />

                    </div>
                  </div>
                  <div>
                    <div className="font-bold pr-10">Penthouse Chingon</div>
                    <div className="text-sm opacity-50">Cancun</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">1-of-1</span>
              </td>
              <td className='text-sm'>0/1</td>
              <td className='text-sm pr-10'>{shortenAddress("0x71BF184230bF6D412854fffEF1fcf88E62395e8b")}</td>
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
                      <img src="https://bafybeich45ochfhfk736indh5u2x4innoymqdou4qyudwu3ogzniqjkaue.ipfs.nftstorage.link/" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold pr-10">Urban Living</div>
                    <div className="text-sm opacity-50">CDMX</div>
                  </div>
                </div>
              </td>
              <td>
                {/* <br /> */}
                <span className="badge badge-ghost badge-sm">Monthly</span>
              </td>
              <td className='text-sm'>11/12</td>
              <td className='text-sm pr-10'>{shortenAddress("0x71BF184230bF6D412854fffEF1fcf88E62395e8b")}</td>
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
      </motion.div>
    </>
  )
}

export default LiveProjects