import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ArticleHeader from "./ArticleHeader";
import ViewArticle from "./ViewArticle";
interface props {
    cardBackground?: string,
    cardMobile: string,
    cardCollection: string,
    title?: string, 
    content?:string
}
const Card: React.FC<props> = props => {
    const cardRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                direction: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            }
        )

        return () => {

        }
    }, [])

    return (
        <div

            ref={cardRef}
            className={`article-card p-8 pb-0 ${props.cardBackground} ${props.cardMobile} ${props.cardCollection}`}
        >
            <ArticleHeader title={props.title} />
        </div>
    )
};

export default Card;
