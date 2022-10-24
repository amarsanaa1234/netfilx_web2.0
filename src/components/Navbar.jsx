import React from 'react'
import styled from 'styled-components' 
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import {signOut} from 'firebase/auth'
import {firebaseAuth} from '../utils/firebase-config'

export default function Navbar({isScrolled}) {

    const links = [
        {name:"Home", link:"/"},
        {name:"TV shows", link:"/tv"},
        {name:"Movies", link:"/movies"},
        {name:"My List", link:"/mylist"},
    ]
    const[showSearch,setShowSearch] = useState(false);
    const[inputHover,setInputHover] = useState(false);

    return (
    <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
            <div className='left flex a-center'>
                <div className='brand flex a-center'>
                    <img src={logo} alt="logo"/>
                </div>
                <ul className='links flex'>
                    {
                        links.map(({name, link}) => {
                            return(
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className='right flex a-center'>
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                    <button onFocus={() => setShowSearch(true)} onBlur={
                        ()=>{
                            if(!inputHover) setShowSearch(false);
                        }
                    }>
                        <FaSearch/>
                    </button>
                    <input type="text" 
                    placeholder='Search'
                    onMouseEnter={() => setInputHover(true)}
                    onMouseLeave={() => setInputHover(false)}
                    onBlur = {() => {
                        setShowSearch(false);
                        setInputHover(false);
                    }}
                    />
                    <button onClick={()=> signOut(firebaseAuth)}>
                        <FaPowerOff/>
                    </button>
                </div>
            </div>
        </nav>
    </Container>
  )
}

const Container = styled.dev`

`;
