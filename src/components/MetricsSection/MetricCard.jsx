import React from 'react';


function MetricCard({title , value , icon}){
    return(
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-col'>
            <div className='flex items-center justify-between mb-2'>
                <h3 className='text-gray-500 font-medium'>{title}</h3>
                {icon && <span className='text-blue-500'>{icon}</span>}
            </div>
            <p className='text-2xl font-bold'>{value}</p>
        </div>
    )
}
    
export default MetricCard;