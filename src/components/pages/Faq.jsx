import React from 'react'

function Faq() {
    const faqs = [
        {
            id: 1,
            question: "Will updates also be free?",
            answer: 'Lorem, <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> iunipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        },
        {
            id: 2,
            question: "Discounts for students and Non Profit Organizations?",
            answer: 'Lorem, ipsum dolor sit amet consectetur adipiscing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        },
        {
            id: 3,
            question: "I need something unique, Can you make it?",
            answer: 'Lorem, <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        },
        {
            id: 4,
            question: "Is there any documentation and support?",
            answer: 'Lorem, <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        },
        {
            id: 5,
            question: "Any refunds?",
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        },
        {
            id: 6,
            question: "What is a product key?",
            answer: 'Lorem, <a href="#link" class="text-[#00a896] hover:underline font-medium">link</a> ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!'
        }
    ];
  return (
    <>
        <div className="w-full bg-white pt-16 pb-28 px-6 md:px-16 font-sans selection:bg-teal-100">
            <div className="max-w-[1320px] mx-auto space-y-20">
                <div className="text-center pt-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight">Frequently Asked Questions</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full pt-4">
                    {faqs.map(item => (
                        <div key={item.id} className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100/70 flex items-start gap-6">
                            <div className="flex-shrink-0 mt-1.5">
                                <div className="w-[26px] h-[26px] rounded-full bg-[#00a896] flex items-center justify-center text-white text-sm font-bold shadow-sm">✓</div>
                            </div>
                            <div className="space-y-4 text-left">
                                <h3 className="text-2xl font-bold text-slate-800 leading-tight tracking-tight">{item.question}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">Lorem, <a href="#link" className="text-[#00a896] hover:underline font-medium">link</a> {item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq
