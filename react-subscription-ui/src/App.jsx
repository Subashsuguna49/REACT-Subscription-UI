import React, { useState } from 'react'
import PricingCard from './components/PricingCard'
import './App.css'
import pricingPlans from './data/pricingData'

const App = () => {



  return (

    <div className="container">

      {
        pricingPlans.map((plans)=>{
           return <PricingCard  key={plans.id} plan={plans}/>      
        })
      }

    </div>
  )
}

export default App