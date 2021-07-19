import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link, useHistory } from 'react-router-dom'
import './Header.css'


function Header() {
    let user = JSON.parse(localStorage.getItem('user-info')) 
    const history = useHistory()
    function logOut(){
        localStorage.clear();
        history.push('/register')
    }
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
                    {localStorage.getItem('user-info')?
                    <Nav>
                         < NavDropdown title={user && user.name}>
                          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                          </NavDropdown>
                    </Nav>
                    :null}
                    </Navbar>
             <br />          
          
        </div>
    )
}
export default Header