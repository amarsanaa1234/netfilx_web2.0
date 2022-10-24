import React, { useState } from 'react'
import Navbar from "../components/Navbar"


export default function Netflix() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null
    }
    return (
    <div>
      <h1>adwsf</h1>
      <button> fsdfsefse</button>
        <Navbar isScrolled={isScrolled}/>
    </div>
  )
}
