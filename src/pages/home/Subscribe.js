import React            from 'react';
import TextiO           from '../../snippets/TextiO';
import SubscribeFrom    from '../../snippets/SubscribeForm';

const Subscribe = () => {

    return(
        <section className="home-subscribe item page-width">
            <div className='grid desktop-two-col mobile-one-col'>
                <section className="left top txt-over-img-box" style={{paddingTop:'100%'}}>
                    <div className="img-background"><img src="brown-wooden-floor_wide.jpg" alt="Window-light on wooden floor" /></div>
                    <div className="txt-foreground">
                        <div>
                            <TextiO>
                                <h2>There is Hope</h2>
                            </TextiO>
                        </div>
                    </div>
                </section>
                <section className="right bottom">
                    <div>
                        <h2>Subscribe</h2>
                        <p>Stay up to date on what is going on</p>
                        <SubscribeFrom/>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Subscribe;