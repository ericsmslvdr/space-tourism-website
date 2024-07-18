import React from 'react'

const CrewDetails = ({ position, name, description, image, renderDots }) => {

    return (
        <div className='grow flex flex-col gap-10 lg:flex-row'>
            <div className='flex-1 w-full h-full flex flex-col lg:justify-center'>
                <div className='flex-1 flex flex-col items-center justify-center lg:items-start lg:flex-grow-[2]'>
                    <span className='text-slate-400 font-bellefair text-[18px] md:text-[24px] lg:text-[32px]'>{position}</span>
                    <span className='font-bellefair text-[24px] md:text-[40px] lg:text-[56px]'>{name}</span>
                    <p className='text-light-blue text-[15px] md:text-[16px] lg:text-[18px] text-center pt-8 lg:text-start'>{description}</p>
                </div>
                <div className='self-center flex gap-4 lg:self-start lg:flex-grow-[1]'>
                    {renderDots()}
                </div>
            </div>
            <div className='flex-1'>
                {/* add fade */}
                <div className='w-full h-full grid place-content-center'>
                    <img src={image} alt="" className='h-80 md:h-[32rem] lg:h-[40rem]' />
                </div>
            </div>
        </div>
    )
}

export default CrewDetails