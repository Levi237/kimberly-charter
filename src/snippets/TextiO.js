// This Snippet was created to wrap about it's child allowing for a fade-in once effect when scrolling into view.
import './TextiO.css';
import React, { useEffect, useRef } from 'react';

const TextiO = (props) => {

    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.remove('hide-item');
                    observer.disconnect();
                }, 300)
            };
        });
        observer.observe(ref.current);
    }, []);

    return(
        <section ref={ref} className={`text-io hide-item item page-width`}>
            {props.children}
        </section>
    );
};

export default TextiO;