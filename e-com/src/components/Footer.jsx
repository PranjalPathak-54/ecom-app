import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ispum is the dummy text for Typesetting and printing industry</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+92 123456679</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copywright 2024@ forever.com - All Rights are reserved</p>
        </div>
    </div>
  )
}

export default Footer