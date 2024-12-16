import { Col } from 'react-bootstrap'

const AppleFooter = () => {
  return (
    <Col
      className=" footer col-12 p-4 pb-3 bg-black bg-body-tertiary align-items-center text-light"
      data-bs-theme="dark"
    >
      <div className="d-flex mb-4">
        <p className="mb-0">Italia</p>
        <p className="mb-0 opacity-25 px-2"> | </p>
        <p className="mb-0 opacity-75"> English (UK) </p>
      </div>
      <div className="d-flex my-2 py-0">
        <p className="mb-0">
          Copiright © {new Date().getFullYear()} Apple Inc.{' '}
        </p>

        <p className="mb-0 opacity-75 px-2"> Tutti i diritti riservati.</p>
      </div>
      <div className="mb-2 d-flex my-0 py-0 flex-wrap">
        <p className="mb-0">Condizioni dei servizi internet.</p>
        <p className="mb-0 opacity-25 px-2"> | </p>
        <p className="mb-0">Apple Music e provacy</p>
        <p className="mb-0 opacity-25 px-2"> | </p>
        <p className="mb-0">Avviso sui cookie</p>
        <p className="mb-0 opacity-25 px-2"> | </p>
        <p className="mb-0">Supporto</p>
        <p className="mb-0 opacity-25 px-2"> | </p>
        <p className="mb-0">Feedback</p>
      </div>
    </Col>
  )
}

export default AppleFooter
