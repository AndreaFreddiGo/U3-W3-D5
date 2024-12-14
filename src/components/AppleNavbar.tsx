import { Form, Nav, Navbar } from 'react-bootstrap'
import appleMusicLogo from '../assets/images/music.svg'
import { AppleNavbarProps } from '../types/NavbarProps'

const AppleNavbar = (props: AppleNavbarProps) => {
  return (
    <Navbar
      expand="lg"
      className="d-flex flex-md-column flex-row-reverse bg-body-tertiary px-3 py-0"
      data-bs-theme="dark"
    >
      <Navbar.Brand className="me-auto p-0">
        <img
          id="musicLogo"
          alt="Apple Logo"
          src={appleMusicLogo}
          width="60"
          className="d-inline-block m-0 ms-3 my-4"
          style={{ filter: 'invert(1)' }}
        />
      </Navbar.Brand>
      <Form
        className="d-none d-md-block mx-2 p-0 border border-1 border-secondary rounded-1 py-0"
        onSubmit={props.onSubmit}
      >
        <Form.Control
          type="text"
          placeholder="Cerca"
          className="bg-dark text-light border-0 py-1 opacity-75"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
        />
      </Form>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="border-0 text-danger"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="w-100">
        <Nav className="d-flex flex-column mb-auto mt-3 me-auto">
          <div className="d-flex ms-2">
            <i className="bi bi-house-door nav-link p-0 text-danger fs-4"></i>
            <p className="text-light mt-2 mb-1 ms-2">Home</p>
          </div>
          <div className="d-flex ms-2">
            <i className="bi bi-grid nav-link p-0 text-danger fs-4"></i>
            <p className="text-light mt-2 mb-1 ms-2">Novità</p>
          </div>
          <div className="d-flex ms-2">
            <i className="bi bi-broadcast nav-link p-0 text-danger fs-4"></i>
            <p className="text-light mt-2 mb-1 ms-2">Radio</p>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppleNavbar
