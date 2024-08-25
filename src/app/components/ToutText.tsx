"use client";
import React from 'react'
interface props {
    advices?: string[]
}
const ToutText: React.FC<props> = ({ advices }) => {
    return (
        <div className="toutText mr-3 sm:mx-0">

            {
                advices && advices?.length > 0 ?

                    <ul className="list-disc pl-5 w-full text-left font-extrabold">
                        {
                            advices.map(text => (
                                <li>{text}</li>
                            ))
                        }
                    </ul>
                    :
                    <ul className="list-disc pl-5 w-full text-left font-extrabold">
                        <li>Mix it up</li>
                        <li>Consistency is key</li>
                    </ul>
            }

        </div>
    )
}

export default ToutText