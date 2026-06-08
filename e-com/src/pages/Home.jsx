import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <Bestseller/>
        <Ourpolicy/>
        <Newsletter/>
    </div>
  )
}

export default Home