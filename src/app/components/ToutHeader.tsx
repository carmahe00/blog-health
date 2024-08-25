"use client";
import React from 'react'
interface props{
    title?: string
}
const ToutHeader: React.FC<props> = ({title}) => {
  return (
    <h1 className="toutHeader mt-5 mb-4 sm:mb-1 sm:mt-0 text-left font-bold">{title ? title : "Regular Exercise"}</h1>
  )
}

export default ToutHeader