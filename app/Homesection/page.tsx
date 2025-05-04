import React from 'react'
import Testimonial from '../Testimonial/page'
import Ourclients from '../Ourclients/page'
import Stats from '../Stats/page'
import Awards from '../Awards/page'
import CTABanner from '../CTABanner/page'
import Hero from '../Hero/page'

function Homesection() {
  return (
    <div>
      <Hero />
      <Stats />
      <Awards />
      <Ourclients />
      <Testimonial />
      <CTABanner />
    </div>
  )
}

export default Homesection
