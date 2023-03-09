import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import shadow from '../assets/shadow.webp'
import Image from 'next/image';


// type Props = {}

const NavBar = () => {
  return (
      <div className="navbar bg-white md:px-6 border-b">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Homepage</a></li>
                      <li><a>Portfolio</a></li>
                      <li><a>About</a></li>
                  </ul>
              </div>
          </div>
          <div className="navbar-center">
              <a className="btn btn-ghost normal-case text-xl">weset.io</a>
          </div>
          <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <ConnectButton showBalance={false} />

              <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                          <Image src={shadow} alt="user profile" width={50} height={50} />
                      </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <li>
                          <a className="justify-between">
                              Profile
                              <span className="badge">New</span>
                          </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default NavBar