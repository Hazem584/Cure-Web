import React from "react";
import { Switch } from "@material-tailwind/react";

const Themetoggler = ({theme, setTheme}) => {
    
     return (
          <div>
               <Switch color="yellow" checked={theme=='light' ? true:false}  label={theme} ripple={false} onClick={()=>setTheme()} />
          </div>
     );
};

export default Themetoggler;
