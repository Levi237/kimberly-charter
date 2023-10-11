import React from 'react';
import '../pages.css';
import FirstHomeSection from './FirstSection';

const HomePage = () => {
    return (
        <div className="home">

            <FirstHomeSection />
            
            <section>
                <div className="txt-foreground">
                    <div className="page-width">
                        <h3><center>Let's get to know each other and heal & grow together.</center></h3>   
                        <br/>                     
                        <p><center>This is a guided conversation, where you will have an opportunity to discuss with the group as Kimberly moderates the conversation</center></p>
                       <br/>
                       <p>Our circle of friends time will be an online zoom meeting with no more than 10, so that everyone can have an opportunity to participate.  The class will be a 6 week session.  Once you register you will receive a Zoom link and can participate from the comfort of wherever you are most comfortable.</p>
                        <br/>
                        <h4>Example topics</h4>
                    <ul>
                        <li>How do I live a life of faith</li>
                        <li>Good Grief…How did I get here?</li>
                        <li>Why am I having to recreate myself?</li>
                    </ul>
                    <p>These are just a sample of the topics we will discuss in a session.</p>
                    </div>
                </div>

                <div className="img-background">
                    <img src="kim_website_background.jpg" alt="Wallpaper with bible and laptop" />
                    <div className="gradient-overlay"></div>
                </div>
            </section>

            <section className="page-width section-info">
                <div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;