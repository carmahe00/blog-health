"use client";
import React from 'react'
import { Parallax } from 'react-scroll-parallax'
interface props{
    title?:string,
    content?: string,
    toutOverlapContent:string,
    toutOverlapCopy?:string,
    totuOverlapText: string
}
const ToutOverlap: React.FC<props> = (props) => {
  return (
    <div className={props.toutOverlapContent}>
    {/* <div className="toutImage toutImage--overlap" /> */}
    <Parallax className={props.toutOverlapCopy}  rotateX={[360, -360]}>
      <div className={props.totuOverlapText}>
        <h1 className="toutHeader--overlap">{props.title ? props.title : "This is a Header"}</h1>
        <div className="toutText--overlap text-white">
          <p>
            {
                props.content
            }
          </p>
        </div>
      </div>
    </Parallax>
  </div>
  )
}

export default ToutOverlap