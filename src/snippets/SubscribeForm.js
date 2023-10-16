import React from 'react';

const SubscribeFrom = () => {
    return(
        <div id="mc_embed_shell">     
            <div id="mc_embed_signup">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <form action={`https://coveredperfectly.us18.list-manage.com/subscribe/post?u=3899f2f3d1b88d55665fb0f93&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}&amp;f_id=${process.env.REACT_APP_MAILCHIMP_FORM_ID}`} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                            <label for="mce-EMAIL">
                                Email Address 
                                <span className="asterisk">*</span>
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>
                        <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                            <input type="text" name="b_3899f2f3d1b88d55665fb0f93_596c04a2fc" tabindex="-1" value="" />
                        </div>
                        <div className="clear">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscribeFrom;