import { Col, Row } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import appleLogo from '../assets/images/apple.svg'

const ApplePlayer = () => {
  return (
    <Col
      className="col-12 p-0 bg-black bg-body-tertiary d-flex align-items-center"
      data-bs-theme="dark"
    >
      <Row className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col col-6 bg-body-secondary text-center m-1">
            <img
              id="appleLogo"
              alt="Apple Logo"
              src={appleLogo}
              className="bg-transparent my-2 opacity-50"
              style={{ filter: 'invert(1)' }}
            />
          </div>
          <i className="bi bi-person-fill btn btn-danger fst-normal px-3 py-0  rounded-1 my-2 ms-3 fs-6">
            {'  '}
            Accedi
          </i>
        </div>
      </Row>
    </Col>
  )
}

export default ApplePlayer
