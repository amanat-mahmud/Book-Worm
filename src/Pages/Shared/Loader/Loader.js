import React from 'react';

const Loader = () => {
    return (
        <div className='mt-48'>
        <div className="px-4 py-12">
      <div className=" rounded relative">
        <div className="rounded-full bg-indigo-200 w-[176px] h-[176px] relative flex justify-center items-center mx-auto animate-spin">
          <svg className="absolute top-4 right-6" width={22} height={22} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={10} cy={10} r={10} fill="#4338CA" />
          </svg>
          <div className="div rounded-full bg-slate-50 w-[150px] h-[150px]" />
        </div>
      </div>
    </div>
    </div>
      )
};

export default Loader;