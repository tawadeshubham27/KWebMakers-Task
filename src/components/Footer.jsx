import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[#0060af] text-white text-sm">
            <div className="py-7 px-5 uppercase font-poppins">
                &copy; {new Date().getFullYear()} Astral Paints. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
