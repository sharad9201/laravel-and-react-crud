import {Nav, Navbar} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './Header.css'


function Header() {

    return (
        <div className="">
            
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" className="logo">Duo</Navbar.Brand>
                    <Nav className="mr-auto navbar_wrapper">
                        {
                            localStorage.getItem('user-info') ?
                            <>
                                <Link to="/add">Add Products</Link>
                                <Link to="/update">Update Products</Link>
                            </> :
                            <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </>
                        }
         
                    </Nav>
                </Navbar>
             <br />          
          
        </div>
    )
}
export default Header