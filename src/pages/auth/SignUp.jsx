import React from "react";
 import AuthLayout from "../../components/auth/AuthLayout";
  import AuthSignup from "../../components/auth/AuthSignup"; 
  import Footer from "../../components/footer/Footer"
   const SignUp = () => {
     return ( <div  >
        <AuthLayout> 
         <AuthSignup /> 
       </AuthLayout>
       
         </div> 
   

        ); 
        
      };
   export default SignUp;


