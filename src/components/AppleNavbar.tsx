import { Col, Form, Nav, Navbar, Row } from 'react-bootstrap'
import appleMusicLogo from '../assets/images/music.svg'
import { AppleNavbarProps } from '../types/NavbarProps'

const AppleNavbar = (props: AppleNavbarProps) => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="d-flex flex-md-column flex-row-reverse"
    >
      <Navbar.Brand href="#home">
        <img
          alt="Apple Logo"
          src={appleMusicLogo}
          width="60"
          className="d-inline-block align-top m-0"
          style={{ filter: 'invert(1)' }}
        />
      </Navbar.Brand>
      <Form className="d-none d-md-block" onSubmit={props.onSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Cerca"
              className="mr-sm-2 bg-transparent"
              value={props.query} // Bind input value to query state
              onChange={(e) => props.setQuery(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="border-0 text-danger"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column flex-md-grow-1">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Novità</Nav.Link>
          <Nav.Link href="#link">Radio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppleNavbar
