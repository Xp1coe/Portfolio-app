import React from 'react'

const Sports = () => {
    return (
        <div className='bg-[#282828] '>
            <div>
                <h1 className='text-white font-serif text-2xl font-bold ml-10 px-10'>Sports And Hobbies</h1>
            </div>
            <div className='flex ml-20 py-5 gap-10'>
            <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[500px]'>
                    <h2 className="text-xl font-bold mb-4">Football</h2>
                    <img src='#' alt="Football" className='rounded-lg' />
                    <p className="text-gray-600 py-2"></p>
                </div>
            </div>
        </div>
    )
}

export default Sports