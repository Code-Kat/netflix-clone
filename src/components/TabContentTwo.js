import React from 'react';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMacBook from '../images/tab-macbook.png';
import { Button } from "./Button";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";


export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className = "tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere - 
                    personalized for you.</span>
                    <Button className="btn">TRY IT NOW</Button>
                </div>
                {/* Tab Bottom Content */}
                <div className="tab-bottom-content">
                   {/* Tv Image container */}
                    <div>
                         <img src={ImgTv} alt="tv" style={{width: '18.75rem'}}/>
                         <h3>Watch on your TV.</h3>
                        <p>Smart TVs, PlayStation, Xbx, Chromecast, Apple TV, 
                        Blue-Ray players and more.</p>
                    </div>
                     {/* Tablet Image container */}
                     <div>
                         <img src={ImgTablet} alt="tablet" style={{width: '18.75rem', paddingTop:'0.625rem'}}/>
                         <h3>Watch on your TV.</h3>
                        <p>Smart TVs, PlayStation, Xbx, Chromecast, Apple TV, 
                        Blue-Ray players and more.</p>
                    </div>
                     {/* MacBook Image container */}
                     <div>
                         <img src={ImgMacBook} alt="macbook" style={{width: '18.75rem', paddingTop: '0.625rem', 
                        paddingBottom: '0.625rem'}}/>
                         <h3>Watch on your TV.</h3>
                        <p>Smart TVs, PlayStation, Xbx, Chromecast, Apple TV, 
                        Blue-Ray players and more.</p>
                    </div>
                </div>
            </div>    
        </TabContainer>
    )
}

// Media

const customMedia = generateMedia ({
    smDesktop: '1440px',
    tablet: '900px'
})

//Main Tab Content Container
const TabContainer=styled.div`
background: var(main--deep-dark);

.tab-content{
    margin: 0 15%
}

//Tab Top Content
.tab-top-content{
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content:center;
    align-items:center;
    padding: 2.5rem 0;
    ${customMedia.lessThan('smDesktop')`
    grid-template-columns: repeat(2, 1fr);
    `}

    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1.5rem;
    `};
}

span{
    grid-column: 1/8; 
    ${customMedia.lessThan('tablet')`
    grid-column: 1/ -1;
    font-size: 1.5rem;
    `}
}
.btn{
    grid-column: 10/12;
    margin: 0 auto 1.25rem;
    ${customMedia.lessThan('tablet')`
    grid-column: 1/-1;
    text-align:center;
    `}
}

img {
    width: 100%;
    height: auto;

}

//Tab Bottom Content
.tab-bottom-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 2rem;
    text-align:center;
    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;

    `}
}

h3{
    margin: 0.5rem 0rem
}

p{
    color: var(--main-grey);
}
`;
