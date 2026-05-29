import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="w-full bg-[#f4f9f8] pt-16 pb-8 px-6 md:px-8 font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 text-lg">Company</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#pricing" className="hover:text-[#00a896]">Pricing</a></li>
                <li><a href="#quickstart" className="hover:text-[#00a896]">Quick Start</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 text-lg">Product</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-[#00a896]">Features</a></li>
                <li><a href="#platform" className="hover:text-[#00a896]">Platform</a></li>
                <li><a href="#pricing" className="hover:text-[#00a896]">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 text-lg">Support</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#faq" className="hover:text-[#00a896]">FAQ</a></li>
                <li><a href="#privacy" className="hover:text-[#00a896]">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[#00a896]">Terms & Conditions</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-4">
              <img src="https://themewagon.github.io/bigspring/images/logo.png" alt="Bigspring Logo" className="h-9 object-contain"/>
              <p className="text-slate-500 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget amet, tempus eu at cttur.</p>
              <div className="flex gap-2 pt-2">
                <a href="#fb" className="w-8 h-8 rounded-full bg-white text-[#00a896] border border-teal-100 flex items-center justify-center hover:bg-[#00a896] hover:text-white text-sm font-bold shadow-sm">FB</a>
                <a href="#tw" className="w-8 h-8 rounded-full bg-white text-[#00a896] border border-teal-100 flex items-center justify-center hover:bg-[#00a896] hover:text-white text-sm font-bold shadow-sm">TW</a>
                <a href="#in" className="w-8 h-8 rounded-full bg-white text-[#00a896] border border-teal-100 flex items-center justify-center hover:bg-[#00a896] hover:text-white text-sm font-bold shadow-sm">LN</a>
                <a href="#sk" className="w-8 h-8 rounded-full bg-white text-[#00a896] border border-teal-100 flex items-center justify-center hover:bg-[#00a896] hover:text-white text-sm font-bold shadow-sm">SK</a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-slate-200/60 text-center text-xs text-slate-400">
              <p>Designed and Developed By Themefisher • Distributed by ThemeWagon</p>
          </div>
        </footer>          
    </div>
  )
}

export default Footer
