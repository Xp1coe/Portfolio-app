import React from 'react'
import card1 from '../Assests/img/card1.jpg'
import card2 from '../Assests/img/card2.jpg'
import cet from '../Assests/img/cet_cell.png'
import portf from '../Assests/img/portf.jpg'

const Portfolio = () => {
  return (
    <div className='bg-[#282828] '>
      <h1 className='text-white font-serif text-2xl font-bold ml-10 px-10'>Portfolio</h1>
      <div className='flex ml-20 py-5 gap-10'>
        <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[500px]'>
          <h2 className="text-xl font-bold mb-4">Guess the Number</h2>
          <img src={card1} alt="guessnumber" className='rounded-lg' />
          <p className="text-gray-600 py-2">"Guess the number" game in JavaScript where users guess a number between 1 and 20. The program gives feedback on their guesses and displays a message when they guess the correct number.</p>
          <button className='flex align-bottom bg-blue-500 hover:bg-blue-700 text-white font-bold items-center justify-center py-[10px] px-[50px] w-[250px] rounded-md '>View The Project</button>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[500px]'>
          <h2 className="text-xl font-bold mb-4">Digital Clock</h2>
          <img src={card2} alt="guessnumber" className='rounded-lg' />
          <p className="text-gray-600 py-2">The HTML file sets up the structure of the webpage, the CSS file styles the appearance of the clock, and the JavaScript file contains the code to retrieve the current time from the user's system and update the display accordingly.</p>
          <button className='flex align-bottom bg-blue-500 hover:bg-blue-700 text-white font-bold items-center justify-center py-[10px] px-[50px] w-[250px] rounded-md '>View The Project</button>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[500px]'>
          <h2 className="text-xl font-bold mb-4">GRS Gov. of Maharashtra</h2>
          <img src={cet} alt="guessnumber" className='rounded-lg h-[170px] px-10' />
          <p className="text-gray-600 py-2">The CET cell grievance redressal system in React.js with Tailwind CSS and RESTful API is a web application for submitting and tracking CET-related grievances, providing real-time updates and efficient administration.</p>
          <button className='flex align-bottom bg-blue-500 hover:bg-blue-700 text-white font-bold items-center justify-center py-[10px] px-[50px] w-[250px] rounded-md '>View The Project</button>
        </div>
        <div className='bg-white shadow-md rounded-lg p-6 w-[300px] h-[500px]'>
          <h2 className="text-xl font-bold mb-4">Resume in React.js</h2>
          <img src={portf} alt="guessnumber" className='rounded-lg h-[170px]' />
          <p className="text-gray-600 py-2">The online CV app I built in Tailwind CSS and React.js displays all the qualifications and achievements of the user in a user-friendly and visually appealing format, allowing for easy sharing and viewing.</p>
          <button className='flex align-bottom bg-blue-500 hover:bg-blue-700 text-white font-bold items-center justify-center py-[10px] px-[50px] w-[250px] rounded-md '>View The Project</button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
