import { useState } from 'react'
import { Header } from './components/Header'
import { Cards } from './components/Cards'

function App() {

  return (
    <div className="App bg-slate-200 h-screen">
      <Header />
      <Cards />
    </div>
  )
}

export default App
