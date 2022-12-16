// React Components
import { Link, useNavigate } from 'react-router-dom'


// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const HomePageNavbar = () => {


  return (
    <nav className='nav'>
      <Link to ='/'>🖋</Link>
      <ul className='navicons'>
        <li>
          <Link to='/register'>register |</Link>
        </li>
        <li>
          <Link to= '/gallery'>gallery |</Link>
        </li>
        <li>
          <Link to='/upload'>upload |</Link>
        </li>
        <li>
          <Link>logout</Link>
        </li>
      </ul>

    </nav>

  )
}

export default HomePageNavbar