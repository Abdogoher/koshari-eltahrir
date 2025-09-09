import React from 'react'
import Main from '../Components/HomePage/Main'
import Offers from '../Components/HomePage/Offers'
import OfferTitle from '../Components/HomePage/OfferTitle'
import ManuTitle from './../Components/Manu/ManuTitle';
import ManuItems from './../Components/Manu/ManuItems';

const HomePage = () => {
  return (
    <div>
      <Main />
      <OfferTitle />
      <Offers />
      <ManuTitle />
      <ManuItems />
    </div>
  )
}

export default HomePage
