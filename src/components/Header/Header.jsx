import React from 'react'

function Header(){
    return (
        <header className='bg-blue-600 text-white shadow-md'>
            <div className='container mx-auto px-4 py-4 flex items-center'>
                <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-xl mr-3'>
                        S
                    </div>
                    <h1 className='font-bold text-2xl'>Streamify Dashboard</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;