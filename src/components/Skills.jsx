import React from 'react'
import html from '../Assests/img/html.jpg'
import css from '../Assests/img/css.jpg'
import js from '../Assests/img/js.jpg'
import react from '../Assests/img/react.jpg'
import tailwindcss from '../Assests/img/tailwind-css.svg'
import bootstrap from '../Assests/img/bootstrap.svg'

const Skills = () => {
    return (
        <div className='bg-[#282828] '>
            <h1 className='text-white font-serif text-2xl font-bold ml-10 px-10'>Skills</h1>
            <div className='flex ml-20 py-5 gap-10'>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">HTML5</h2>
                    <img src={html} alt="guessnumber" className='rounded-lg' />
                    <br />
                    <p>HTML stands for HyperText Markup Language and is the most basic building block of the Web.</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">CSS3</h2>
                    <img src={css} alt="guessnumber" className='rounded-lg w-[250px] h-[150px]' />
                    <br />
                    <p>CSS is a styling language for web documents, defining the appearance of HTML and XML elements.</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">Javascript</h2>
                    <img src={js} alt="guessnumber" className='rounded-lg' />
                    <br />
                    <p>HTML stands for HyperText Markup Language and is the most basic building block of the Web.</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">React.js</h2>
                    <img src={react} alt="guessnumber" className='rounded-lg' />
                    <br />
                    <p>HTML stands for HyperText Markup Language and is the most basic building block of the Web.</p>
                </div>
            </div>
            <div className='flex ml-20 py-5 gap-10'>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">Tailwind CSS</h2>
                    <img src={tailwindcss} alt="guessnumber" className='rounded-lg w-[250px] h-[150px]' />
                    <br />
                    <p>HTML stands for HyperText Markup Language and is the most basic building block of the Web.</p>
                </div>
                <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[360px]'>
                    <h2 className="text-xl font-bold mb-4">Bootstrap5</h2>
                    <img src={bootstrap} alt="guessnumber" className='rounded-lg w-[250px] h-[150px]' />
                    <br />
                    <p>HTML stands for HyperText Markup Language and is the most basic building block of the Web.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills