import { useState } from 'react'
import { Header } from './components/Header'
import { Cards } from './components/Cards'

function App() {

  return (
    <div className="App bg-slate-200 h-full">
      <Header />
      <Cards />
    </div>
  )
}

export default App
