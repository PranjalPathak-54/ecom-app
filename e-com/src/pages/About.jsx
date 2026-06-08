import React from 'react'
import Text from '../components/Text'
import Newsletter from '../components/Newsletter'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Text text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of passion to deliver clothes according to size,style of each person and introduce new innovation in the field of fashion </p>
          <p>Since the inception of our operations we have dedicated our resources in our full capacity to provide best clothes for each individual.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide our customers best service and to empower them to pursue fashion.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Text text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticolously select and vet each product to ensure it meets our stringent quality standards</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering services ,shopping becomes easier at once.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated team of professionals is here to assist you the way , ensuring your needs.</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About