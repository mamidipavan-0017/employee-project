import React from 'react'
import Header from './Header'
import Dashboard from './Dashboard'

function Home() {
  return (
    <div className='H-1'>
      <Header />
      <div>
        <Dashboard />
      </div>
    </div>
  )
}

export default Home