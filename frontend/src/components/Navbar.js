import React from 'react'
import { Link } from 'gatsby'
import '../sass/navbar.scss'

export default function Navbar() {
  return (
    <nav className='nav'>
      <h1 className='h1 nav-title text-center'>
        <Link to='/' className='nav-brand'>
          If I Were <span className='accent'>A</span> Writer
        </Link>
      </h1>
      {/* <hr className="title-underline" /> */}
      <h2 className='h2 nav-subtitle text-center'>I Would Write About</h2>
      <ul className='nav-items'>
        <Link className='nav-item' to='/blog' activeClassName='active'>
          Tech
        </Link>
        {/* <Link className='nav-item' to='/speaking' activeClassName='active'> */}
        {/*   Talk */}
        {/* </Link> */}
        {/* <Link className='nav-item' to='/gold' activeClassName='active'> */}
        {/*   Gold */}
        {/* </Link> */}
        {/* <Link className='nav-item' to='/silver' activeClassName='active'> */}
        {/*   Silver */}
        {/* </Link> */}
        {/* <Link className='nav-item' to='/economics' activeClassName='active'> */}
        {/*   Economics */}
        {/* </Link> */}
      </ul>
    </nav>
  )
}
