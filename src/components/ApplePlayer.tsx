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
          <div className="col col-3 mx-auto text-secondary d-flex align-items-center justify-content-center flex-grow-1">
            <i className="bi bi-shuffle px-1 fs-6"></i>
            <i className="bi bi-rewind-fill px-1 fs-4"></i>
            <i className="bi bi-play-fill px-1 fs-2"></i>
            <i className="bi bi-fast-forward-fill px-1 fs-4"></i>
            <i className="bi bi-repeat px-1 fs-6"></i>
          </div>
          <div className="col col-5 bg-body-secondary text-center m-1 flex-grow-1">
            <img
              id="appleLogo"
              px-1
              alt="Apple Logo"
              src={appleLogo}
              className="bg-transparent my-2 opacity-50"
              style={{ filter: 'invert(1)' }}
            />
          </div>
          <div className="d-flex col col-3 justify-content-end flex-grow-1">
            <i className="bi bi-person-fill btn btn-danger fst-normal px-3 py-0  rounded-1 my-2 ms-3 fs-6">
              {'  '}
              Accedi
            </i>
          </div>
        </div>
      </Row>
    </Col>
  )
}

export default ApplePlayer
