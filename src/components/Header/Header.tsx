import React from 'react'
import { headerClasses } from './headerClasses'
import { Link } from 'react-router-dom'

const Header = () => {
  const {header, navContainer, navContent, linkHome, linkProfile, linkSignIn}= headerClasses
    return (
    <header className={header}>
        <nav className={navContainer}>
            <div className={navContent}>
            <div className="flex items-center w-full">
                <Link to="/" className={linkHome}>Home</Link>
                <Link to="/auth" className={linkSignIn}>Sign in</Link>
                <Link to="/profile" className="linkProfile">
                <img 
                className={linkProfile}
                src="https://static.thenounproject.com/png/1014492-200.png"
                alt='Avatar'
                >
                </img></Link>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header