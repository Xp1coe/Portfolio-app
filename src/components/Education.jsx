import React from 'react'

const Education = () => {
    return (
        <div className='bg-[#282828] '>
            <div>
                <h1 className='text-white font-serif text-2xl font-bold ml-10 px-10'>Education And Qualifications</h1>
            </div>
            <div className='flex ml-20 py-5 gap-10'>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[400px]'>
                    <h2 className="text-xl font-bold mb-4">Rosary High School and Junior College</h2>
                    <img src='#' alt="Rosary" className='rounded-lg' />
                    <p className="text-gray-600 py-2"></p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[400px]'>
                    <h2 className="text-xl font-bold mb-4">S.M.Choksey High School and Junior College</h2>
                    <img src='#' alt="Choksey" className='rounded-lg' />
                    <p className="text-gray-600 py-2"></p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[400px]'>
                    <h2 className="text-xl font-bold mb-4">AISSMS Polytechnic</h2>
                    <img src='#' alt="Aissms" className='rounded-lg' />
                    <p className="text-gray-600 py-2"></p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[400px]'>
                    <h2 className="text-xl font-bold mb-4">Vishwakarma University</h2>
                    <img src='#' alt="VU" className='rounded-lg' />
                    <p className="text-gray-600 py-2"></p>
                </div>
            </div>
        </div>
    )
}

export default Education