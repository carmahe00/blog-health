"use client";
import React, { Fragment } from 'react'
import Card from './ViewArticle';

const CardCollection = () => {
  return (
    <Fragment>
        <div className="article-collection">
          <Card cardMobile="w-11/12" cardCollection="mr-8 relative" title='Set Realistic Goals' />
          <Card
            cardMobile="w-11/12"
            cardBackground="article-card__background-image"
            cardCollection="mr-8 relative"
            title='Listen to Your Body'
          />
          <Card cardMobile="w-11/12" cardCollection="mr-8 relative" title='Stay Educated' />
          <Card cardMobile="w-11/12" cardCollection="mr-8 relative" title='Maintain a Positive Mindset' />
          
        </div>
      </Fragment>
  )
}

export default CardCollection