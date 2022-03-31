import React from 'react'
import{Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import me from '../../Assets/Images/me.jpg'
export default function Appnavigation() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">React-100-projects</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/hooks">Hooks</Nav.Link>
      <Nav.Link href="/home">Home</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/userlogin">MultiReturns</NavDropdown.Item>
        <NavDropdown.Item href="/sidebar">sidebar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
          <img style={{width:'50px',borderRadius:'50%'}} src={me} alt="Developer Rayhan"/>
        
      </Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
