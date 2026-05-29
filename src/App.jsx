import React from 'react'
import Header from './Header';
import Orta from './Orta';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white font-sans antialiased">
          <Header/>
          <Orta/>
          <Footer/>
      </div>
    </>
  )
}

export default App