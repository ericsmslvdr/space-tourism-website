import React from 'react'

const TechnologyDetails = ({ name, description, images, renderStepIndicator }) => {
    const { portrait, landscape } = images;

    return (
        <div className='mx-[-1rem] md:mx-auto py-16 lg:flex lg:flex-row-reverse lg:py-0 lg:justify-between lg:gap-8'>
            <div className='md:max-lg:hidden'>
                <img src={portrait} alt="" className='w-full' />
            </div>
            <div className='hidden md:max-lg:block'>
                <img src={landscape} alt="" className='w-full' />
            </div>
            <div className='md:w-3/5 px-4 flex flex-col items-center text-center md:max-lg:mx-auto lg:flex-row lg:gap-16 lg:text-start lg:justify-self-start'>
                <div className='flex gap-6 py-8 lg:flex-col'>
                    {renderStepIndicator()}
                </div>
                <div>
                    <span className='font-bellefair text-[18px] text-light-blue md:text-[24px] lg:text-[32px]'>THE TERMINOLOGIES...</span>
                    <h1 className='font-bellefair text-[24px] md:text-[40px] lg:text-[56px]'>{name}</h1>
                    <p className='text-[15px] text-light-blue leading-relaxed py-4 md:text-[16px] lg:text-[18px]'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TechnologyDetails