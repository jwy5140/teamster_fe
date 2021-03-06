import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import { v4 as uuid } from 'uuid'
import CheckUser from './checkUser'

import styled from 'styled-components'


const Splash = (props) => {

    const createTitle = () => {
            let title = ['T', 'e', 'a', 'm', 's', 't', 'e', 'r']

            return title.map((letter, index) => {
                return <Fade in={true} key={`${index}-${uuid()}`} timeout={{enter: 2000}} style={{transitionDelay: `${250*index}ms`}}><span>{letter}</span></Fade>
            })        
    }

    const visited1 = () => {
        return localStorage.getItem("visited") == 1 ? '0ms' : '3000ms'
    }
    
    return <div>
        <Background src='./bgr.png' className='bg' alt=''/>
        <ContentContainer>
            <h1 className='app-name'>{createTitle()}</h1>
            <TextSlide>
                <div>Create</div>
                <div className='m1'><span>New Relationships</span></div>
            </TextSlide><br />
            <TextSlide>
                <div>Gain</div>
                <div className='m2'><span>New Skills</span></div>
            </TextSlide><br />
            <TextSlide>
                <div>Exceed</div>
                <div className='m3'><span>Your Expectations</span></div>
            </TextSlide><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/login'><Button variant='contained' size='large' color='primary'>{`Login`}</Button></Link></Fade><br />
            <Fade in={true} timeout={{enter: 3000}} style={{transitionDelay: visited1()}}>< Link to='/signup'><Button variant='contained' size='large' color='primary'>{`Signup`}</Button></ Link></Fade>
            < CheckUser history={props.history} />
        </ContentContainer>
    </div>
}

export default Splash

//----Styles----//

const TextSlide = styled.div`
    font-size: 1.67vw;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;

    div {
        display: table-cell;
    }

    div:first-of-type {
        animation: sub-reveal 7s 3s 1 both;
    }

    div.m1 {
        animation: full-reveal 9s 3s 1 both;

        span {
            animation: left-swoop 7s 3s 1 both;
        }
    }

    div.m2 {
        animation: full-reveal 9s 4s 1 both;
        
        span {
            animation: left-swoop 7s 4s 1 both;
        }
    }

    div.m3 {
        animation: full-reveal 9s 5s 1 both;
        
        span {
            animation: left-swoop 7s 5s 1 both;
        }
    }

    @keyframes sub-reveal {
        0% {opacity: 0;}
        20% {opacity: 1;}
        100% {opacity: 1;}
    }

    @keyframes left-swoop {
        0% {margin-left: -67vw;}
        20% {margin-left: -67vw;}
        35% {margin-left: .5vw;}
        100% {margin-left: .5vw;}
    }

    @keyframes full-reveal {
        0% {opacity: 0}
        20% {opacity: 1}
    }
`

const Background = styled.img`
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
`

const ContentContainer = styled.div`
    top: 7.5%;
    left: 30%;
    height: 40%;
    width: 40%;
    position: absolute;
    z-index: 98;

    button {
        height: 30%;
        width: 45%;  
        font-size: 2vw;
        margin-top: 2%;
    }

    *::selection {
        background-color: transparent;
    }
`