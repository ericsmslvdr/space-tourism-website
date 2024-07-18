import React, { useState } from 'react'
import CrewDetails from './components/crew-details'
import { crewData } from './crew-data'

const CrewSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCrewData = (index) => {
        setActiveIndex(index);
    }

    const renderDots = () => (
        crewData.map((_, index) => (
            <div
                key={index}
                onClick={() => handleCrewData(index)}
                className={`${index === activeIndex ? 'bg-slate-50' : 'bg-slate-500'} size-3 lg:size-4 rounded-full`}
            />
        ))
    )

    return (
        <section className="grow px-4 pt-4 md:pt-16">
            <div className='h-full flex flex-col md:w-5/6 mx-auto'>
                <p className='font-barlow-c text-light-blue tracking-widest text-center md:text-start text-[16px] md:text-[20px] lg:text-[28px]'>
                    <span className='pr-4 font-bold text-gray-500'>02</span>
                    MEET YOUR CREW
                </p>
                <CrewDetails {...crewData[activeIndex]} renderDots={renderDots} />
            </div>
        </section>
    )
}

export default CrewSection