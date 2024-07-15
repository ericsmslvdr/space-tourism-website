import React from 'react'

const DestinationDetails = ({ name, image, description, distance, travel, handleChange, destinationNames }) => {
    const allCapsName = name.toUpperCase();

    return (
        <div className='w-full flex flex-col items-center justify-center px-4 lg:flex-row lg:pr-48'>
            <div className='w-full grid place-items-center py-16 lg:py-36'>
                <img src={image} alt="" className='size-[150px] md:size-[300px] lg:size-[480px]' />
            </div>
            <div className='w-full lg:w-3/5'>
                <ul className='flex justify-evenly max-w-[350px] mx-auto lg:mx-0 lg:justify-start lg:gap-8'>
                    {destinationNames.map((destName, index) => (
                        <li
                            key={index}
                            onClick={() => handleChange(destName)}
                            className={`${name === destName ? 'border-b-2' : ''} hover:border-b-2 pb-1 cursor-pointer`}
                        >
                            {destName}
                        </li>
                    ))}
                </ul>
                <div className='text-center lg:text-start'>
                    <h1 className='text-[56px] md:text-[80px] lg:text-[96px]'>{allCapsName}</h1>
                    <p className='text-[15px] leading-loose text-light-blue md:text-[16px] lg:text-[18px]'>{description}</p>
                    <hr className='border border-gray-800 my-4' />
                    <div className='flex flex-col gap-4 lg:flex-row lg:gap-28'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[14px] text-light-blue'>AVG. DISTANCE</span>
                            <p className='text-[28px] font-bellefair'>{distance}</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[14px] text-light-blue'>EST. TIME TRAVEL</span>
                            <p className='text-[28px] font-bellefair'>{travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationDetails