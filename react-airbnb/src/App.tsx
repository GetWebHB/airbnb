import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from '@/components/Header'
import routes from './router'
const App = memo(() => {
  return (
    <>
      <div className="app">
        <Header />
        {useRoutes(routes)}
        <h2>footer</h2>
      </div>
    </>
  )
})

export default App
