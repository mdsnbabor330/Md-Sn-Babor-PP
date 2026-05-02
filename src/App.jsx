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
      <div className='min-h-screen w-full flex items-center justify-center bg-transparent p-0 sm:p-4'>
        <div className='w-full max-w-7xl bg-[#222222] border border-gray-50/20 flex flex-col lg:flex-row relative shadow-2xl shadow-black/50 lg:shadow-[0_0_40px_rgba(120,204,109,0.15)] lg:rounded-xl lg:h-[88vh] lg:border-2 overflow-hidden'>
          <Navbar />
          <div className='flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden'>
            <Profile />
            <div className='flex-1 overflow-y-auto relative custom-scrollbar pb-20 lg:pb-0 min-h-0'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className='h-full w-full'
                >
                  <Outlet />
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
