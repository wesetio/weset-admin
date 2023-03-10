import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// type Props = {}

const weekly = () => {
    // group input classnames
    const inputCn = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    const labelCn = 'block mb-2 font-medium text-gray-900 dark:text-white'

  return (
    <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className='flex flex-col w-full items-center min-h-screen bg-gradient-to-b from-blue-100/50'
        >
          <div className='w-11/12'>
              <div className="text-sm breadcrumbs my-6">
                <ul>
                  <li>
                    <Link href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      Contracts
                    </a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    New Weekly Contract
                  </li>
                </ul>
              </div>
              <h3 className='text-3xl font-semibold '>Create Weekly Contract on Polygon</h3>
              <div>Not sure if this is the right contract? Find the best one for you with our onboarding tool, or learn more about the Weekly contract here.</div>
              <hr className='my-4' />
            </div>
            <div className='flex gap-x-16 w-11/12 mt-10'>
                <div className='w-1/2'>
                    <div className='bg-white h-[400px] shadow rounded-md w-full'></div>
                </div>
                <div className='w-full'>
                        <form>
                          <div className="mb-4">
                            <label htmlFor="name" className={labelCn}>Collection name</label>
                            <input type="text" id="collection-name" className={inputCn} placeholder="" required />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="symbol" className={labelCn}>Collection Symbol</label>
                            <input type="text" id="collection-symbol" className={inputCn} placeholder="" required />
                          </div>
                          <div className="mb-4">
                            <label htmlFor="blockchain" className={labelCn}>Blockchain</label>
                          {/* rainbow dropdown with token icons */}
                              <ConnectButton  showBalance={false} />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="email" className={labelCn}>Your email</label>
                              <input type="email" id="email" className={inputCn} placeholder="name@flowbite.com" required />
                          </div>
                          <div className="mb-6">
                              <label htmlFor="password" className={labelCn}>Your password</label>
                              <input type="password" id="password" className={inputCn} required />
                          </div>
                          <div className="flex items-start mb-6">
                              <div className="flex items-center h-5">
                                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                              </div>
                              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                </div>
            </div>
        </motion.div>
    </>
  )
}

export default weekly