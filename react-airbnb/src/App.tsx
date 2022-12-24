import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const App = memo(() => {
  return (
    <>
      <div className="app">
        <Header />
        {useRoutes(routes)}
        <Footer />
      </div>
    </>
  )
})

export default App
