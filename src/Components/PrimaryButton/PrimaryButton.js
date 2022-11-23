import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-[#92B4EC] text-white border-0 hover:bg-black">{children}</button>
        </div>
    );
};

export default PrimaryButton;