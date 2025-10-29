import React from "react";
const AuthLayout = ({ children }) => {
  return (
  
    <div className="h-screen max-h-screen overflow-hidden bg-white dark:bg-dark-bgSurface">
      <div className="md:container mx-auto  py-10 relative z-10 px-4">
        <section className="mb-6 flex justify-center lg:justify-start">
          <img
            src="/BsHeartPulse.svg"
            alt="cure-web"
            className="w-16 h-16 md:w-12 md:h-12  mx-auto sm:mx-0"
          />
        </section>

        {children}
      </div>
      <div className="absolute end-0 top-0 bottom-0 w-full pointer-events-none overflow-hidden hidden lg:block">
        <svg
          className="absolute -end-32 top-0 h-svh "
          width="797"
          height="852"
          viewBox="0 0 797 852"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M622.049 236.855C712.358 111.759 561.901 -135.568 561.901 -135.568L1297.43 286.45L733.252 1269.75L16.8734 858.722C16.8734 858.722 356.087 780.1 413.389 600.526C444.004 504.584 352.282 437.434 403.62 350.146C454.096 264.324 563.849 317.473 622.049 236.855Z"
            fill="#E8EFF8"
          />
          <path
            d="M608.617 230.438C699.165 104.924 548.927 -142.784 548.927 -142.784L1284.46 279.234L718.504 1265.63L2.1255 854.598C2.1255 854.598 341.71 775.33 399.3 595.253C430.07 499.043 338.368 431.858 389.864 344.294C440.495 258.2 550.262 311.326 608.617 230.438Z"
            stroke="#145DB8"
          />
        </svg>
      </div>
    </div>
  );
};

export default AuthLayout;
