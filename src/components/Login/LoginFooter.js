import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'
import { generateMedia } from "styled-media-query";
class Footer extends Component {
    state= {
        langContent: false
    }

    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft:'10%', color: '#999'}}>
                    Questions? <Link>Call 1-877-742-1335</Link>
                    </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Act on Specified Commercial Transactions</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                    </ul>
                    {/* Langauge Button */}
                    <div className="language-btn" onClick={this.handleToggle}>
                    <Icon icon={iosWorld} size={20} style={{marginRight: '1rem'}}/>
                     English 
                    <Icon icon={arrowSortedDown} />
                    </div>
                </div>
                {/* Toggle Language Content */}
                {this.state.langContent && (
                <div className="lang-toggle">
                    <ul>
                        <li>English</li>
                        <li>French</li>
                    </ul>
                </div>
                )}
                <span style={{ marginLeft: '10%', fontSize: '0.9rem' }}>Netflix Canada</span>
            </FooterContainer>
        )
    }
}

export default Footer;

//Media
const customMedia = generateMedia({
    tablet: '740px'
})

// Main Footer Container
const FooterContainer =  styled.footer`
justify-content: center;
background: rgba(0,0,0,0.8);
padding-top: 3rem;
padding-bottom: 6rem;
margin-top:  6rem;
position: relative;
z-index: 5;


.footer-columns {
    width: 80%;
    margin: 1rem auto 0;
    color: #999;
    font-size: 0.9rem;
    overflow: auto;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan('tablet')`
    grid-template-columns: repeat(2, 1fr);
    `}
}
ul li {
    list-style: none;
    line-height: 2.5;
}

a {
    color: #999;
    font-size: 0.9rem;
}

a: hover {
    text-decoration: underline;
    cursor: pointer;
}

p{
    text-decoration: underline;
    cursor: pointer;
}

//Language Button;
.language-btn{
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 9rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0rem 2rem;
    text-align: right;
    cursor: pointer;

}

//Toggle Language Content
.lang-toggle{
    margin-left: 10%;
    margin-top: -2rem;
}

.lang-toggle ul{
    background: var(main--deep-dark);
    width: 9rem;
    padding-left:0;
    margin-left:0;
    margin-top:0;
    text-align:center;
}

.lang-toggle ul li{
    border: 1px solid #333;
    &:hover {
        background: #0085ff;
        color: white;}
}
`;