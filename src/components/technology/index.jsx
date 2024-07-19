import React, { useState } from 'react'
import TechnologyDetails from './components/technology-details'
import { technologies } from './technology-data'

const TechnologySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTechnologiesData = (index) => {
        setActiveIndex(index)
    }

    const renderStepIndicator = () => (
        technologies.map((_, index) => (
            <div
                key={index}
                onClick={() => handleTechnologiesData(index)}
                className={`${index === activeIndex ? 'bg-white text-black' : 'text-white'} size-10 border grid place-content-center rounded-full cursor-pointer text-[18px] md:size-16 md:text-[24px] lg:text-[32px] lg:size-20`}
            >
                {index + 1}
            </div >
        ))
    )

    return (
        <section className="grow px-4 md:px-0 pt-4 md:pt-16 overflow-y-auto">
            <div className='h-full flex flex-col w-full mx-auto lg:pl-24'>
                <p className='font-barlow-c text-light-blue tracking-widest text-center md:text-start text-[16px] md:text-[20px] lg:text-[28px]'>
                    <span className='pr-4 font-bold text-gray-500'>03</span>
                    SPACE LAUNCH 101
                </p>
                <TechnologyDetails {...technologies[activeIndex]} renderStepIndicator={renderStepIndicator} />
            </div>
        </section>
    )
}

export default TechnologySection