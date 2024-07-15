import React from 'react'
import { Link } from 'react-router-dom'

const HomeSection = () => {
    return (
        <section className="grow px-4 pt-4 md:pt-16">
            <div className="h-full flex flex-col md:w-3/4 mx-auto lg:pb-16 lg:flex-row lg:items-end lg:justify-end">
                <div className="w-full h-full text-center lg:flex lg:flex-col lg:justify-end lg:text-start">
                    <h2 className='font-barlow-c md:text-[28px] tracking-widest'>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className='font-bellefair text-[80px] md:text-[144px]'>SPACE</h1>
                    <p className='text-[15px] md:text-[16px] lg:text-[18px] leading-loose tracking-wide'>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="w-full h-full grid place-content-center lg:flex lg:items-end lg:justify-end lg:text-end lg:pb-8 lg:pr-20">
                    <Link to={'/destination'}>
                        <div className='relative cursor-pointer'>
                            <div className='group w-[144px] h-[144px] rounded-full grid place-content-center bg-white md:w-[272px] md:h-[272px] hover:outline-[72px]'>
                                <span className='font-bellefair text-[18px] text-dark-navy md:text-[32px]'>EXPLORE</span>
                                <div className='w-[0px] h-[0px] rounded-full bg-white/20 absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] group-hover:w-[244px] group-hover:h-[244px] md:group-hover:w-[472px] md:group-hover:h-[472px] transition-all duration-300 ease'></div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeSection