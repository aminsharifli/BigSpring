import React from 'react'

function Pricing() {
  return (
    <>
        <div className="w-full bg-white pt-16 pb-24 px-6 md:px-12 font-sans">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Pricing</h1>
                </div>

                <section className="flex flex-col md:flex-row items-center justify-center gap-0 relative pt-8 max-w-5xl mx-auto">
                    <div className="w-full md:w-[32%] bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center flex flex-col justify-between h-[450px] relative z-10">
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold text-slate-800">Basic Plan</h3>
                            <div className="text-slate-800">
                                <span className="text-5xl font-bold">$49</span>
                                <span className="text-sm text-slate-400">/month</span>
                            </div>
                            <p className="text-sm text-slate-400 font-medium">Best For Small Individuals</p>
                            <ul className="space-y-3 pt-6 text-sm text-slate-500 font-normal">
                                <li>Express Service</li>
                                <li>Customs Clearance</li>
                                <li>Time-Critical Services</li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <button className="w-full border-2 border-teal-500 text-[#00a896] hover:bg-[#00a896] hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200">Get started for free</button>
                        </div>
                    </div>

                    <div className="w-full md:w-[36%] bg-white rounded-2xl p-10 border border-gray-100/70 shadow-[0_25px_60px_rgba(0,0,0,0.09)] text-center flex flex-col justify-between h-[490px] relative z-20 md:-translate-y-5">
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold text-slate-800">Professional Plan</h3>
                            <div className="text-slate-800">
                                <span className="text-5xl font-bold">$69</span>
                                <span className="text-sm text-slate-400">/month</span>
                            </div>
                            <p className="text-sm text-slate-400 font-medium">Best For Professionals</p>
                            <ul className="space-y-3 pt-6 text-sm text-slate-500 font-normal">
                                <li>Express Service</li>
                                <li>Customs Clearance</li>
                                <li>Time-Critical Services</li>
                                <li>Cloud Service</li>
                                <li>Best Dashboard</li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <button className="w-full bg-[#00a896] text-white hover:bg-[#009484] px-5 py-3 rounded-full text-sm font-semibold shadow-md shadow-teal-100 transition-all duration-200">Get started</button>
                        </div>
                    </div>

                    <div className="w-full md:w-[32%] bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center flex flex-col justify-between h-[450px] relative z-10">
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold text-slate-800">Business Plan</h3>
                            <div className="text-slate-800">
                                <span className="text-5xl font-bold">$99</span>
                                <span className="text-sm text-slate-400">/month</span>
                            </div>
                            <p className="text-sm text-slate-400 font-medium">Best For Large Individuals</p>
                            <ul className="space-y-3 pt-6 text-sm text-slate-500 font-normal">
                                <li>Express Service</li>
                                <li>Customs Clearance</li>
                                <li>Time-Critical Services</li>
                            </ul>
                        </div>
                        <div className="pt-6">
                            <button className="w-full border-2 border-teal-500 text-[#00a896] hover:bg-[#00a896] hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200">Get started</button>
                        </div>
                    </div>

                </section>

                <section className="pt-8">
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-gray-100/50">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                            <div className="flex-1 flex justify-center md:justify-start">
                                <img src="https://themewagon.github.io/bigspring/images/cta.svg" alt="Larger plan graphic" className="w-full max-w-[320px] h-auto object-contain select-none"/>
                            </div>

                            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                                <div className="space-y-3">
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Need a larger plan?</h2>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:inline" />Consequat tristique eget amet, tempus eu at consecttur.</p>
                                </div>
                                <div className="pt-2">
                                    <button className="bg-[#00a896] text-white px-8 py-3.5 rounded-full font-semibold shadow-md shadow-teal-100 hover:bg-[#009484] transition duration-200 text-sm md:text-base">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Pricing
