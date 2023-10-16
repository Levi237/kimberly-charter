import React, { useEffect, useRef } from 'react';

const Contact = () => {

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
        <section ref={ref} className="home-about hide-item item page-width">
           
        </section>
    );
};

export default Contact;