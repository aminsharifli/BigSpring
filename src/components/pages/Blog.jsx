import React from 'react'

function Blog() {
    const blogs = [
        {
            id: 1,
            title: "How to make toys from old Olarpaper",
            image: "https://themewagon.github.io/bigspring/images/blog-4.jpg",
            alt: "News 1"
        },
        {
            id: 2,
            title: "What you need to know about Photography",
            image: "https://themewagon.github.io/bigspring/images/blog-3.jpg",
            alt: "News 2"
        },
        {
            id: 3,
            title: "How to make toys from old Olarpaper",
            image: "https://themewagon.github.io/bigspring/images/blog-2.jpg",
            alt: "News 3"
        }
    ];
  return (
    <>
        <div className="w-full bg-white pt-12 pb-20 px-6 font-sans">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Latest news</h1>
                </div>

                <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 w-full">
                    <div className="w-full md:w-[50%]">
                        <img src="https://themewagon.github.io/bigspring/images/blog-4.jpg" alt="Featured news" className="w-full h-[220px] md:h-[240px] object-cover rounded-xl select-none"/>
                    </div>
                    <div className="w-full md:w-[50%] space-y-3 text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">Adversus is a web-based dialer and practical CRM solution</h2>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</p>
                        <div className="pt-1">
                            <button className="bg-[#00a896] text-white px-5 py-2 rounded-full font-medium text-xs hover:bg-[#009484] transition duration-200">Read More</button>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-4">
                    {blogs.map(item => (
                                <div key={item.id} className="flex flex-col space-y-3 text-left">
                                    <img src={item.image} alt="News 1" className="w-full h-40 object-cover rounded-xl select-none"/>
                                    <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug">{item.title}</h3>
                                    <div>
                                        <button className="bg-[#00a896] text-white px-4 py-1.5 rounded-full font-medium text-[11px] hover:bg-[#009484] transition duration-200">Read More</button>
                                    </div>
                                </div>
                    ))}
                </section>

                <div className="flex justify-center items-center gap-1 pt-6 select-none">
                    <button className="w-7 h-7 rounded bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-400 hover:bg-gray-100 text-[11px]">&lsaquo;</button>
                    <button className="w-7 h-7 rounded bg-[#00a896] text-white flex items-center justify-center text-[11px] font-semibold">1</button>
                    <button className="w-7 h-7 rounded bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-gray-100 text-[11px]">2</button>
                    <button className="w-7 h-7 rounded bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-400 hover:bg-gray-100 text-[11px]">&rsaquo;</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
