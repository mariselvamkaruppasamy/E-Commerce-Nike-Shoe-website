import React from 'react'
import { Banner1 } from '../Components/Banner1'
import {Services} from '../Components/Services'
import {HalfTags} from '../Components/HalfTags'
import {BrandAmb} from '../Components/BrandAmb'
import {Footer} from '../Components/Footer'
import {MostSellShoes} from '../Components/MostSellShoes'

export const Home = () => {
  return (
    <>
      <Banner1/>
      <MostSellShoes/>
      <HalfTags/>
      <Services/>
      <BrandAmb/>
      <Footer/>
    </>
  )
}

