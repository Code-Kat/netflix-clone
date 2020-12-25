import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import '../css/App.css';
import { Button } from './Button';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';

//Media Query
import { generateMedia } from "styled-media-query";

class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                
                <div className="header-top">
                    <Logo src={logo} alt="logo"/>
                    <NavLink to="/login" className= "signIn-btn">Sign In </NavLink>
                </div>
                {/*Header Content*/}
                <div className="header-content">
                    <Title>See what's next.</Title>
                    <SubTitle>WATCH ANYTIME. CANCEL ANYTIME.</SubTitle>
                    <Button className="main-offer-btn" primary>Try it now
                    <Icon className="Icon" icon={ic_keyboard_arrow_right} size={37}/></Button>
                </div>

            </HeaderComponent>
        )
    }
}

export default Header;

const customMedia= generateMedia({
lgDesktop: '1350px',
mdDesktop: '1150px',
tablet: '950px',
smTablet: '740px'
});

//Logo
const Logo =styled.img`
display: inline-block;
width: 10rem;
height: 3.5rem
position: absolute;
padding-top:10px;
padding-left:30px;
${customMedia.lessThan('tablet')`
left: 20%;
`}

`;

//Header Container
const HeaderComponent = styled.div`

.signIn-btn{
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;
    float: right;
    margin-top:15px;
    margin-right: 30px;
    }
    ${customMedia.lessThan('smTablet')`
    margin-top:1.25rem
    `}

//Header Top
    .header-top{
        position:relative;
        height: 10rem;
        z-index: 1;
    }

//Header Content
.header-content{
    width:65%;
    position: relative;
    margin: 7% auto auto;
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    flex-direction: column;
    z-index:2;
    ${customMedia.lessThan('smTablet')`
    display:grid;
    grid-template-rows: repeat (3, 60px);
    `}
}


//Icon
.Icon svg{
    vertical-align: bottom;
    margin-left: 1rem;
    ${customMedia.lessThan('smTablet')`
    display: none !important;
    `}
}

.main-offer-btn {
    margin-bottom: 25%;
    ${customMedia.lessThan('lgDesktop')`
    margin: 5% 33% 25%;
    font-size: 1.5rem;
    `}
    ${customMedia.lessThan('mdDesktop')`
    margin: 5% 25% 25%;
    font-size: 1.5rem;
    `}
    ${customMedia.lessThan('tablet')`
    margin: 5% 20% 25%;
    font-size: 1.3rem;
    `}
}
`;



//Main title
const Title= styled.h1`
margin: 0 0 1.2rem;
font-size: 5rem;
font-weight: 700:
font-height: 1.1rem;
${customMedia.lessThan('tablet')`
font-size: 2.6rem;
`}
`;

//SubTitle
const SubTitle=styled.h2`
font-weight:400:
font-size: 1.875rem;
line-height;1.25;
margin; 0 0 1.875rem;
text-transform: uppercase;
${customMedia.lessThan('smTablet')`
font-size: 1.4rem;
margin:0;
`}
`;



