import React from "react"
import Notification from "./Notification"

export default function NotificationMenu({notifications}){
  function EmptyNotification(){
    return (
      <div className="flex items-center bg-white p-5 justify-center w-full h-full">
        No Notifications
      </div>
    );
  }
  return(
    <div className="menu rounded-t-[20px] min-h-28 max-h-80 md:w-[466px] overflow-y-scroll overflow-x-hidden absolute right-0">
      <div className="title font-georgia text-lg text-black bg-lighttertiary text-center p-2">Your Notification</div>
          
          {notifications.length > 0 ?
          notifications.map(({title,details,elpased,type},idx)=>{
                return( 
                <Notification
                  key={idx}
                  title={title}
                  details={details}
                  elpased_time={elpased}
                  type={type}
                />)
              }
          )
          :
          <EmptyNotification />
        }
      </div>
    )
        
}