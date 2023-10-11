import React, { useEffect, useRef } from 'react';

const FirstHomeSection = () => {

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
        <section ref={ref} className="first-home-section hide-item item page-width">
            <img className="headshot desktop-only" width="50%" src="Pastor_Kim_Portrait_tall.jpg" alt="Kim Headshot"/>
            <p>In a world where we feel disconnected and time is so valuable, how do we find the path for feeling and wholeness?</p>
            <img className="headshot mobile-only" width="50%" src="Pastor_Kim_Portrait_tall.jpg" alt="Kim Headshot"/>
            <p>Kimberly has brought the world of fellowship and friendship to a new platform, allowing you to be present from your computer for 60 to 90 minutes once a week with a small group of likeminded people who want to improve their lives with connectivity.</p>
            <p>Kimberly brings a level of spirituality and caring to the table that helps you to know you are in a safe place, with quite possibly the opportunity to make new friends along the way, who may make a difference in your life while growing and healing are always the goal.</p>
        </section>
    );
};

export default FirstHomeSection;