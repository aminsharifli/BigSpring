import React from 'react';
import { HiOutlineCode } from 'react-icons/hi';
import { BiDesktop, BiUserVoice, BiHeart, BiCloudLightning, BiCloud } from 'react-icons/bi';
import Slider from './Slider';

function Orta() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 text-center md:pt-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1e293b] sm:text-5xl md:text-6xl max-w-3xl mx-auto leading-tight">Let us solve your critical website development challenges</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
          <div className="mt-10 flex justify-center px-4">
            <img src="https://themewagon.github.io/bigspring/images/banner-art.svg" alt="Website development banner art" className="w-full max-w-4xl h-auto object-contain select-none"/>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f4f9f8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">Something You Need To Know</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><HiOutlineCode className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Clean Code</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><BiDesktop className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Object Oriented</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><BiUserVoice className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">24h Service</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><BiHeart className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Value for Money</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><BiCloudLightning className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Faster Response</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
              <div className="mb-5 p-3 rounded-xl bg-teal-50"><BiCloud className="w-8 h-8 text-[#00a896]" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cloud Support</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">It is the most advanced digital marketing and it company.</h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consequat.</p>
            <a href="#readmore" className="inline-block text-[#00a896] font-semibold hover:underline">Check it out </a>
          </div>
          <div className="flex-1 w-full"><Slider/></div>
        </div>
      </div>

      <div className="w-full bg-[#f4f9f8] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">It is a privately owned Information and cyber security company</h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consequat.</p>
            <a href="#readmore" className="inline-block text-[#00a896] font-semibold hover:underline">Check it out </a>
          </div>
          <div className="flex-1 w-full"><Slider/></div>
        </div>
      </div>

      <div className="w-full bg-white py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">It's a team of experienced and skilled people with distributions</h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consequat.</p>
            <a href="#readmore" className="inline-block text-[#00a896] font-semibold hover:underline">Check it out </a>
          </div>
          <div className="flex-1 w-full"><Slider /></div>
        </div>
      </div>

      <div className="w-full bg-[#f4f9f8] py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">A company standing different from others</h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consequat.</p>
            <a href="#readmore" className="inline-block text-[#00a896] font-semibold hover:underline">Check it out</a>
          </div>
          <div className="flex-1 w-full"><Slider/></div>
        </div>
      </div>

      <div className="w-full bg-white pt-20">
        <div className="w-full text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 px-6">Experience the best workflow with us</h2>
          <div className="w-full"><img src="https://themewagon.github.io/bigspring/images/banner.svg" alt="Workflow" className="w-full h-auto block select-none"/></div>
        </div>
      </div>

      <div className="w-full bg-white pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-gray-100/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex-1 flex justify-center md:justify-start">
              <img src="https://themewagon.github.io/bigspring/images/cta.svg" alt="Get Started Graphic" className="w-full  h-auto object-contain select-none"/>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Ready to get started?</h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:inline" />Consequat tristique eget amet, tempus eu at consecttur.</p>
              </div>
              
              <div className="pt-2">
                <button className="bg-[#00a896] text-white px-7 py-3 rounded-full font-semibold shadow-md shadow-teal-100 hover:bg-[#009484] transition duration-200 text-sm md:text-base">Contact Us</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Orta;