import React from 'react'
import "../Components/about.css"


import pic3 from '../images/coffee1.png'
export default function About() {
  return (
   <section id='about'>
    <div className='aboutdiv'>
    <div className='about-div'>
       <div className='top'>
       <h1>Aeropress</h1>
        <i>"A device for brewing coffee. Coffee is steeped for 10–50 seconds (depending on grind and preferred strength) and then forced through a filter by pressing the plunger through the tube.".</i>
       </div>
       <div className='top1'>
       <h1>Awesome Aroma</h1>
        <i>"The sensation or smell released from brewed coffee. The smell of coffee grounds is referred to as the Bouquet.".</i>
       </div>
       <div className='top2'>
       <h1>CAPPUCCINO 
</h1>
        <i>"An espresso drink created with one serving of espresso topped with steamed milk and froth."</i>
       </div>
      
 
    </div>
   <div className='bottom'>
    <div>
    <h1>Taste and See Coffee Shop </h1>
    <p>and Gallery offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee (although you are more than welcome to do that), we are a place where you can sit down and enjoy that tailor-made cup of coffee. If you need to work, we have a seating area created specifically for you</p>
   
    </div>
    </div> 
   </div>
   </section>
  )
}
