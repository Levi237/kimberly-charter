// import React, { useEffect, useRef } from 'react';
import React from 'react';
const ContactSection = () => {

    // const ref = useRef();
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         const entry = entries[0];
    //         if (entry.isIntersecting){
    //             setTimeout(() => {
    //                 entry.target.classList.remove('hide-item');
    //                 observer.disconnect();
    //             }, 300)
    //         };
    //     });
    //     observer.observe(ref.current);
    // }, []);

    return(
        <section ref={ref} className="home-contact hide-item item page-width">
        </section>
    );
};

export default HomeSectionA;