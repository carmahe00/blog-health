"use client";
import React, { Fragment } from 'react'
interface props {
    title?: string
}
const ArticleHeader: React.FC<props> = ({ title }) => {
    return (
        <Fragment>
            <p className="article-intro w-4/5 text-xl sm:text-4xl">
                {title ? title : "Header"}
            </p>
        </Fragment>
    )
}

export default ArticleHeader