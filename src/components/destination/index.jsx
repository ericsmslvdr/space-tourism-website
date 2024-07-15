import React, { useState } from 'react';
import { destinations } from './destination-data';
import DestinationDetails from './components/destination-details';

const DestinationSection = () => {
    console.log(destinations);
    const [data, setData] = useState(destinations[0]);
    const destinationNames = destinations.map(dest => dest.name);

    const handleChangeDestination = (name) => {
        const data = destinations.find(dest => dest.name === name)
        setData(data);
    }

    console.log("DATA: ", data);

    return (
        <section className="h-full px-4 pt-4 md:pt-16">
            <div className='h-full flex flex-col md:w-5/6 mx-auto'>
                <p className='font-barlow-c text-light-blue tracking-widest text-center md:text-start text-[16px] md:text-[20px] lg:text-[28px]'>
                    <span className='pr-4 font-bold text-gray-500'>01</span>
                    PICK YOUR DESTINATION
                </p>
                <DestinationDetails {...data} handleChange={handleChangeDestination} destinationNames={destinationNames} />
            </div>
        </section>
    )
}

export default DestinationSection