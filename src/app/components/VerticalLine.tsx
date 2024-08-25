import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";


const VerticalLine = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);  // Set initial state to 0
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this to control when the animation starts
  });
  const lineRef = useRef(null);

  useEffect(() => {
    // This check ensures the code only runs on the client side
    if (typeof window !== 'undefined') {
      setPrevScrollPos(window.scrollY);
    
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const isScrollingDown = currentScrollPos > prevScrollPos;
        setPrevScrollPos(currentScrollPos);

        if (inView) {
          if (isScrollingDown) {
            gsap.to(lineRef.current, {
              scaleY: 1,
              duration: 1.5,
              ease: "power4.out",
            });
          } else {
            gsap.to(lineRef.current, {
              scaleY: 0,
              duration: 1.5,
              ease: "power4.out",
            });
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [inView, prevScrollPos]);

  return (
    <div ref={ref}>
      <div ref={lineRef} className="vertical-line" />
    </div>
  );
};

export default VerticalLine;
