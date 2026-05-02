import React, { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import './App.css'
import Navbar from './navbar/Navbar'
import Profile from './profile/Profile'
import Cursor from './cursor/Cursor'
import Background from './background/Background'
import Loader from './loader/Loader'

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const lenisRef = React.useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      wrapper: document.getElementById('main-content') || window,
      content: document.getElementById('main-content') || document.documentElement,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); 

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  // Update Lenis on route change
  useEffect(() => {
    if (lenisRef.current) {
      // Small delay to allow DOM to update
      setTimeout(() => {
        lenisRef.current.resize();
        // Reset scroll position on route change
        lenisRef.current.scrollTo(0, { immediate: true });
      }, 50);
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <Cursor />
      <Background />
      <div className='min-h-screen w-full flex items-center justify-center bg-transparent p-0 sm:p-4'>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='w-full max-w-7xl bg-[#222222] border border-gray-50/20 flex flex-col lg:flex-row relative shadow-2xl shadow-black/50 lg:shadow-[0_0_40px_rgba(120,204,109,0.15)] lg:rounded-xl lg:h-[85vh] 2xl:h-[75vh] lg:border-2 overflow-hidden'
        >
          <Navbar />
          <div className='flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden'>
            <Profile />
            <div className='flex-1 overflow-y-auto relative custom-scrollbar pb-20 lg:pb-0 min-h-0' id="main-content">
              <AnimatePresence mode='wait' initial={false}>
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className='h-full w-full'
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default App
