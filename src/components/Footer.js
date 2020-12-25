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
                <span style={{ marginLeft:'15%', fontSize: '1.125rem'}}>
                    Questions? <Link>Call 1-877-742-1335</Link>
                    </span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
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
                <span style={{ marginLeft: '15%', fontSize: '0.9rem' }}>Netflix Canada</span>
            </FooterContainer>
        )
    }
}

export default Footer;

//Media
const customMedia = generateMedia({
    tablet: '740px'
})

const FooterContainer =  styled.footer`
background: var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3rem;
color:#999;

.footer-columns {
    width: 70%;
    margin: 1rem auto 0;
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
}

a: hover {
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
    margin-left: 15%;
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