import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-6 py-6 md:px-12">
          <nav className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://themewagon.github.io/bigspring/images/logo.png" alt="Bigspring Logo" className="h-10 w-auto object-contain"/>
              </div>

              <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
                <Link to={'/'} className="hover:text-[#00a896] transition-colors">Home</Link>
                <Link to={'/blog'} className="hover:text-[#00a896] transition-colors">Blog</Link>
                <Link to={'/pricing'} className="hover:text-[#00a896] transition-colors">Pricing</Link>
                <Link to={'/contact'} className="hover:text-[#00a896] transition-colors">Contact</Link>
                <Link to={'/faq'} className="hover:text-[#00a896] transition-colors">FAQ</Link>
              </div>

              <div>
                <button className="rounded-full bg-[#00a896] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#029282] transition-all duration-200">Get Started</button>
              </div>
          </nav>
      </header>
    </>
  )
}

export default Header
