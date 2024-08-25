"use client";
import React from 'react'
import ToutCopy from './ToutCopy';
interface props{
    textDirection:string,
    title?: string,
    advices?: string[]
}
const ToutContent: React.FC<props> = ({textDirection, title, advices}) => {
  return (
    <div className={textDirection} >
        <ToutCopy title={title} advices={advices} />
    </div>
  )
}

export default ToutContent