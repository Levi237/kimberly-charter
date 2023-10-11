import React from 'react';
import '../pages.css';

const HomePage = () => {
    return (
        <div className="home">

            <section className="page-width">
                <img className="headshot desktop-only" width="50%" src="Pastor_Kim_Portrait_tall.jpg" alt="Kim Headshot"/>
                <p>In a world where we feel disconnected and time is so valuable, how do we find the path for feeling and wholeness?</p>
                <img className="headshot mobile-only" width="50%" src="Pastor_Kim_Portrait_tall.jpg" alt="Kim Headshot"/>
                <p>Kimberly has brought the world of fellowship and friendship to a new platform, allowing you to be present from your computer for 60 to 90 minutes once a week with a small group of likeminded people who want to improve their lives with connectivity.</p>
                <p>Kimberly brings a level of spirituality and caring to the table that helps you to know you are in a safe place, with quite possibly the opportunity to make new friends along the way, who may make a difference in your life while growing and healing are always the goal.</p>
            </section>
            
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