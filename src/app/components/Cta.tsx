"use client";
import React from 'react'


interface props{
    ctaBg?:string,
    customText?: string
}
const Cta:React.FC<props> = ({ctaBg, customText}) => {
  return (
    <div
    className={`cta text-center text-white w-auto relative inline-flex mt-12 p-4 px-8 cursor-pointer rounded-full ${ctaBg}`}
  >
    <a href="" className="font-bold">
      {customText ? customText : `How to do it?`}
    </a>
  </div>
  )
}

export default Cta