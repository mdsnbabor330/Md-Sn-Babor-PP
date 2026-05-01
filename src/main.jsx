import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './about/About.jsx'
import Resume from './resume/Resume.jsx'
import Skills from './skills/Skills.jsx'
import Project from './project/Project.jsx'
import Contact from './contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
        loader : ()=>fetch('/servicesData.json')
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/portfolio",
        element: <Project />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

