import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Navbar from './navbar/Navbar'
import Profile from './profile/Profile'

function App() {
  const location = useLocation();

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-[#111111]'>
        <div className='h-[80vh] w-[85vw] bg-[#222222] border-2 border-gray-50/20 overflow-hidden flex'>
          <Navbar></Navbar>
          <Profile></Profile>
          <div className='flex-1 overflow-y-auto relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, x: 30, scale: 0.90 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6,}}
                className='h-full w-full'
              >
                <Outlet></Outlet>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

