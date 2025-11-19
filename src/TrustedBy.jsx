import React from 'react';

const TrustedBy = () => {
    return (
        <div className='h-[250px] w-full bg-primary'>
           <h1 className='font-bold text-4xl text-center pt-10 text-white'>Trusted by Millions, Built for You</h1> 
           <div className='flex gap-40 justify-center mt-5'>
            <div>
            <p className='text-xs text-white'>Total Downloads</p>
            <h1 className='font-bold text-4xl text-white'>29.6M</h1>
            <p className='text-xs text-white'>21% more than last month</p>
           </div>
           <div>
            <p className='text-xs text-white'>Total Downloads</p>
            <h1 className='font-bold text-4xl text-white'>29.6M</h1>
            <p className='text-xs text-white'>21% more than last month</p>
           </div>
           <div>
            <p className='text-xs text-white'>Total Downloads</p>
            <h1 className='font-bold text-4xl text-white'>29.6M</h1>
            <p className='text-xs text-white'>21% more than last month</p>
           </div>
           </div>
        </div>
    );
};

export default TrustedBy;