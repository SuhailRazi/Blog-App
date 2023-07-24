import React, { useContext } from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt='logo' />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=science">
          <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=science">
          <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=science">
          <h6>CINEMA</h6>
          </Link><Link className='link' to="/?cat=science">
          <h6>DESIGN</h6> 
          </Link><Link className='link' to="/?cat=science">
          <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link to="/login">Login</Link>}
            <Link className='link' to="/write">
              <span className='write'>
                 Write
              </span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar