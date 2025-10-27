import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AppRoutes from './Routes'
import Footer from './components/Footer/Footer'
import { Toaster } from 'sonner'

function App() {

  return (
    <>

    <AppRoutes  />
     <Toaster /> 
    </>
  )
}

export default App
