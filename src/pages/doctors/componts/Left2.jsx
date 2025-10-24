import React from 'react'
import { Checkbox } from "@material-tailwind/react";
import Buttons from './Buttons';

import { Select } from "@material-tailwind/react";


const Left2 = () => {

  return (
    <div className='flex flex-col  mr-2'>
      <div className='flex flex-col w-20'>

      <label >Avaliable Data</label>
    
         
      <Checkbox id="Today" color="blue" label="Today" ripple={true} />
      <Checkbox id="Tomorrow" color="blue" label="Tomorrow" ripple={false} />
      </div>
      <div className='pt-5'>
       <h1 className='pb-5'>Gender</h1>
       <Buttons/>
      </div>
   
      <div className='flex flex-col pt-5'>

      <label >Consultation Type</label>
    
         
      <Checkbox id="In-clinic" color="blue" label="In-clinic" ripple={true} />
      <Checkbox id="Home Visit" color="blue" label="Home Visit" ripple={false} />
      </div>
        <div className="pt-5 ">
      <Select className='border-none' label="Sort">
              <Checkbox color="blue"  id="Most recommended" label="Most recommended" ripple={true} />
              <Checkbox color="blue"  id="Price Low to high" label="Price Low to high" ripple={false} /> 
              <Checkbox color="blue"  id="Price High to low" label="Price High to low" ripple={false} />
      </Select>
    </div>

    </div>

  
  );
}

export default Left2
 
