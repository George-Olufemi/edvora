import React from 'react';
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <React.Fragment>
        <div className="bg-[#101010] h-[84px] flex justify-between items-center px-[43px]">
            <Link to="/">
                <div>
                    <h1 className="text-white font-[700] text-[36px] leading-[43px] [text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)] cursor-pointer">Edvora</h1>
                </div>
            </Link>
            <div className="flex justify-between items-center">
                <div className="mr-[25px]">
                    <h1 className="text-white font-[700] text-[20px] leading-[24px]">Dhriv Singh</h1>
                </div>
                <div>
                    <img src="/Rectangle.png" alt="Avatar" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Appbar
