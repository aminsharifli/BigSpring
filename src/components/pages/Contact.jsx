import React from 'react'

function Contact() {
  return (
    <>
        <div className="w-full bg-white pt-16 pb-24 px-6 md:px-12 font-sans">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Contact Us</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto pt-4">
                    
                    <form className="space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
                        <div><input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#00a896] transition-colors bg-white"/></div>
                        <div><input type="email" placeholder="Your email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#00a896] transition-colors bg-white"/></div>
                        <div><input type="text" placeholder="Subject" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#00a896] transition-colors bg-white"/></div>
                        <div><textarea rows="6" placeholder="Your message" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#00a896] transition-colors bg-white resize-none"></textarea></div>
                        <div className="pt-2"><button type="submit" className="bg-[#00a896] text-white px-8 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#009484] transition duration-200 shadow-sm">Send Now</button></div>
                    </form>

                    <div className="space-y-6 text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">Why you should contact us!</h2>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.</p>

                        <ul className="space-y-4 pt-2 text-sm md:text-base text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#00a896] flex-shrink-0"></span>
                                <span>phone: +88 125 256 452</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#00a896] flex-shrink-0"></span>
                                <span>Mail: info@bigspring.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#00a896] flex-shrink-0"></span>
                                <span>Address: 360 Main rd, Rio, Brazil</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
