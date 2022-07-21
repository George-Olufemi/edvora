import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import Spinner from '../components/Spinner';
import Dropdown from '../components/Dropdown';
import Skeleton from '../components/Skeleton';

const NearestRides = () => {
  const [rides, setRides] = useState();
  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides")
    .then(response => setRides(response.data))
  }, []);
  return (
    <React.Fragment>
      <div className="bg-[#292929] h-auto px-[43px] pt-[28px] pb-[100px]">
        <div className="text-white flex justify-between mb-[24px]">
          {/*  */}
          <div className="flex justify-between items-center">
          <Link to="/">
            <div className="mr-[44px] cursor-pointer">
              <h1 className="border-b-2">Nearest rides</h1>
            </div>
          </Link>
          <Link to="/upcoming-rides">
            <div className="mr-[44px] cursor-pointer">
              <h1>Upcoming rides</h1>
            </div>
          </Link>
          <Link to="/past-rides">
            <div className="mr-[44px] cursor-pointer">
              <h1>Past rides</h1>
            </div>
          </Link>
          </div>
          {/*  */}
          <div className="flex justify-center items-center cursor-pointer">
            <div className="mr-[8px]">
              <img src="/hamburger.png" alt="" />
            </div>
            <div>
                <Dropdown />
            </div>
          </div>
        </div>
        {/* component */}
        {
          rides ? rides.map((ride, index) => (
          <div key={index} className="bg-[#171717] w-[1350px] h-[198px] rounded-[10px] flex text-white mb-[13px]">
            <div className="mt-[22px] ml-[29px] mr-[44px]">
              <img className="rounded-[5px] w-[296px] h-[148px] object-fit" src={ride.map_url} alt="Map" />
            </div>
            <div className="mt-[25px] mr-[500px]">
              <p className="line">Ride Id: {ride.id}</p>
              <p className="line">Origin Station: {ride.origin_station_code}</p>
              <p className="line">station_path: {ride.station_path}</p>
              <p className="line">Date: {ride.date}</p>
              <p className="line">Distance: 0</p>
            </div>
            <div className="mt-[26px] mr-[24px]">
              <div className="w-[80px] h-[23px] bg-black rounded-[16px] text-white flex items-center justify-center">
                <h1 className="font-[500] text-[12px] leading-[15px] ">{ride.city}</h1>
              </div>
            </div>
            <div className="mt-[26px]">
              <div className="w-[80px] h-[23px] bg-black rounded-[16px] text-white flex items-center justify-center">
                <h1 className="font-[500] text-[12px] leading-[15px] ">{ride.state}</h1>
              </div>
            </div>
          </div>
          )) :
            <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Spinner />
            </> 
        }
        
      </div>
    </React.Fragment>
  )
}

export default NearestRides;
