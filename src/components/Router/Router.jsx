import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Layout from '../Layout/Layout'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'

function Router() {
  return (
    <>
      <div className="min-h-screen bg-white font-sans antialiased">
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/pricing' element={<Pricing/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/faq' element={<Faq/>} />
            </Route>
          </Routes>
      </div>
    </>
  )
}

export default Router
