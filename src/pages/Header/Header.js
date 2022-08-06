import React, {useState} from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {

  const [isLogin, setIsLogin] = useState(false);


    return (


        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>

          <Nav>

            { isLogin ? 
                        <Link to='/login' onClick={()=> setIsLogin(!isLogin)}> Sing IN </Link> 
                      : <Link to='/login'> Sing Out </Link>
            } 

          </Nav>
        </Container>
      </Navbar>

    );
};

export default Header;