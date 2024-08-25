"use client";
import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ToutHeader from './ToutHeader';
import ToutText from './ToutText';
import Cta from './Cta';

interface props{
    title?: string,
    advices?: string[]
}

const ToutCopy: React.FC<props> = ({advices, title}) => {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);

    return (
        <div className="toutCopy w-full sm:w-1/2" onClick={() => setInProp(!inProp)}>
            <ToutHeader title={title} />
            <CSSTransition
                nodeRef={nodeRef}
                in={inProp}
                timeout={2000}
                appear={true} // Ensure it only appears on the first load
                classNames="my-node"
                unmountOnExit // This removes the element when not in
            >
                <div ref={nodeRef}>
                    <ToutText advices={advices} />
                    <Cta />
                </div>
            </CSSTransition>
        </div>
    );
}

export default ToutCopy;
