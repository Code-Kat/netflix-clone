import React from 'react';
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import { Button } from "./Button";
import { generateMedia} from "styled-media-query";

function TabContentOne() {
    return (
        <TabContentContainer>
            <div className="container">
                <div className="tab-container">
                    <div style={{margin: '0 0 2rem 5rem'}} >

                    
                    <span className="title">If you decide Netflix isn't for you - no problem.
                    No commitment. Cancel online anytime. </span>
                    <br />
                    <Button style={{marginTop: "2rem"}}>TRY IT NOW</Button>
                    </div>
                    
                    
                    <img src ={Img} alt="try-it" />

                </div>

            </div>
        </TabContentContainer>
    )
}

export default TabContentOne;

//Media Query

const customMedia =generateMedia({
    smDesktop: '1440px',
    tablet: '960px'
})

//Main Container
const TabContentContainer = styled.div`
background: var(--main-deep-dark);

.container{
    magin: 0 10%;
}

img{
    width:31.875rem;
}

.title {
    margin-top: 2rem;
    ${customMedia.lessThan('smDesktop')`
    font-size: 1.5rem;
    line-height:1;
    `}
}

.tab-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2rem;
    ${customMedia.lessThan('tablet')`
    grid-template-columns:100%;
    padding-left:0;
    padding-right:0;
    text-align:center;
    `}
}
`;