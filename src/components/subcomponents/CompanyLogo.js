import React from 'react'


export default function CompanyLogo({logo}){
  return( <div className="-mt-16 ml-4 md:mt-4 lg:mt-4">
  <img
    src={logo}
    alt="profile"
    className="w-12 md:w-24 lg:w-26 "
  />
</div>)
}