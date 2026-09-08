import React from 'react'

const PricingCard = ({plan}) => {   // destructuring 
  return (
    <div className='card'>

        <h4 className='title-tag'>{plan.title}</h4>

        <h2 className='price-tag'>{plan.price}</h2>

        {plan.features.map((content)=>{
           return <li className={content.available ? "black":"gray"}>   

                <i className={` fa-solid ${content.available ? "fa-check" : "fa-x" } `}></i> 

                {content.text} </li>
        })}
        
      

        <button className='btn'>BUTTON</button>
        
        

    </div>
  )
}

export default PricingCard