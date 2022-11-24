import React from 'react';

const PrimaryButton = ({children,className}) => {
    return (
        <div>
            <button className={`btn bg-[#92B4EC] text-white border-0 hover:bg-black ${className}`}>{children}</button>
        </div>
    );
};

export default PrimaryButton;