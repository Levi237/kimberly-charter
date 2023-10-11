import React, { Component }     from 'react';
import '../pages.css';
import About                    from './About';
import TextiO            from '../../snippets/TextiO';

export default class HomePageextends extends Component {
    render(){
    return (
        <div className="home">

            <About />
            
            <section className="home-section-b">
                <div className="txt-foreground">
                    <div className="page-width">
                        <TextiO>
                            <h3><center>Let's get to know each other and heal & grow together.</center></h3>   
                        </TextiO>
                        <br/>    
                        <TextiO>             
                            <p><center>This is a guided conversation, where you will have an opportunity to discuss with the group as Kimberly moderates the conversation</center></p>
                        </TextiO>    
                       <br/>
                       <TextiO>    
                        <p>Our circle of friends time will be an online zoom meeting with no more than 10, so that everyone can have an opportunity to participate.  The class will be a 6 week session.  Once you register you will receive a Zoom link and can participate from the comfort of wherever you are most comfortable.</p>
                       </TextiO>    
                    <br/>
                        <h4>Example topics</h4>
                    <ul>
                        <li>How do I live a life of faith</li>
                        <li>Good Grief…How did I get here?</li>
                        <li>Why am I having to recreate myself?</li>
                    </ul>
                    <TextiO>  
                        <p>These are just a sample of the topics we will discuss in a session.</p>
                    </TextiO>
                    </div>
                </div>

                <div className="img-background">
                    <img src="kim_website_background.jpg" alt="Wallpaper with bible and laptop" />
                    <div className="gradient-overlay"></div>
                </div>
            </section>

            {/* <section className="page-width section-info"><div></div></section> */}

        </div>
    );
};
}
// export default HomePage;