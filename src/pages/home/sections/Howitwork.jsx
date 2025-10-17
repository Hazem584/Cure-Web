import React from 'react'
import Howitworkcard from '../components/Howitworkcard'
const Howitwork = () => {
     const cards = [
          {title:"Search for a Doctor",description:"Easily browse by specialty, location, or doctor name to find the right healthcare provider for your needs.",img:"https://i.postimg.cc/WzzBzPhT/1left.png"},
          {title:"Choose a Date & Time",description:"View real-time availability and pick a slot that works best for your schedule. ",img:"https://i.postimg.cc/CxF3tDsH/2lef.png"},
          {title:"Book & Pay Online",description:"Confirm your appointment and pay securely using various payment options—credit card, mobile wallet.",img:"https://i.postimg.cc/nhHy57GG/3lef.png"}

     ]      
  return (
               <section className="howitwork flex flex-col mt-10 gap-10 items-center">
                    <h1 className="text-2xl">How It Works</h1>
                    <div className="cards-container flex gap-4 flex-wrap justify-center items-center">
                    {cards.map(({title,description,img},indx)=><Howitworkcard title={title} description={description} img={img} key={indx}/>)}
                    </div>
               </section>
  )
}

export default Howitwork
