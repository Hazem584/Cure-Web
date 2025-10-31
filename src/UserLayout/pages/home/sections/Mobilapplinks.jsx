import React from "react";
import {
     Card,
     CardHeader,
     CardBody,
     Typography,
     Button,
} from "@material-tailwind/react";
const mobilapplinks = () => {
     return (
       <section className="w-full flex relative justify-center">
         <Card className="w-full flex-col sm:flex-row-reverse top-12 items-center justify-center max-w-[90%] text-white bg-primarylighter rounded-[20px]">
           <CardHeader
             shadow={false}
             floated={false}
             className="m-0 w-2/5 shrink-0 bg-transparent"
           >
             <img
               src="https://i.postimg.cc/mDPVbVgd/phone.png"
               alt="card-image"
               className="h-full w-full object-cover"
             />
           </CardHeader>
           <CardBody>
             <Typography className="mb-2 text-3xl sm:text-4xl !font-[georgia]">
               Your Health, One Tap Away
             </Typography>
             <Typography className="mb-8 text-1xl lg:max-w-[540px] font-normal !font-montserrat">
               Book appointments, chat with doctors, and manage your health
               anytime—right from your phone. Download the app now and stay
               connected wherever you are.
             </Typography>
             <div className="inline-block">
               <div className="app-links flex gap-4">
                 <a
                   className=""
                   href="https://www.googleplay.com"
                   target="_blank"
                 >
                   <img
                     src="https://i.postimg.cc/FRYG9GHL/googleplay.png"
                     alt=""
                   />
                 </a>
                 <a href="https://www.appstore.com" target="_blank">
                   <img
                     src="https://i.postimg.cc/C1RJFJx8/applestore.png"
                     alt=""
                   />
                 </a>
               </div>
             </div>
           </CardBody>
         </Card>
       </section>
     );
};

export default mobilapplinks;
