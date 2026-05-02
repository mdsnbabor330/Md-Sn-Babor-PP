import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Navbar from './navbar/Navbar'
import Profile from './profile/Profile'
import Cursor from './cursor/Cursor'
import Background from './background/Background'

function App() {
  const location = useLocation();

  return (
    <>
      <Cursor />
      <Background />
      <div className='min-h-screen w-full flex items-center justify-center bg-transparent lg:p-0'>
        <div className='lg:h-[80vh] lg:w-[85vw] w-full max-w-7xl bg-[#222222] lg:border-2 border border-gray-50/20 lg:overflow-hidden flex lg:flex-row flex-col relative rounded-xl lg:rounded-none shadow-2xl shadow-black/50 lg:shadow-[0_0_40px_rgba(120,204,109,0.15)]'>
          <Navbar></Navbar>
          <div className='flex lg:flex-row flex-col flex-1 overflow-hidden'>
            <Profile></Profile>
            <div className='flex-1 overflow-y-auto relative custom-scrollbar pb-20 lg:pb-0'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 30, scale: 0.90 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, }}
                  className='h-full w-full'
                >
                  <Outlet></Outlet>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

