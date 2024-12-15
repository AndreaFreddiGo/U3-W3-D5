import { Col } from 'react-bootstrap'

const ExploreCard = () => {
  return (
    <>
      <Col className="col-11 flex-grow-1 mx-auto mx-md-2">
        <div className="d-flex">
          <p className="text-light m-0 fs-5 fw-semibold">Altro da esplorare</p>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Esplora per genere</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>

      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Worldwide</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Video musicali</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Decenni</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Classifiche</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Nuovi artisti</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Attività e stati d'animo</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Audio spaziale</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
      <Col
        className="col-11 col-md-3 bg-body-tertiary p-3 rounded-3 mx-auto mx-md-2 my-2 flex-grow-1"
        data-bs-theme="dark"
      >
        <div className="d-flex justify-content-between ">
          <p className="text-danger m-0">Hit del passato</p>
          <i className="text-danger bi bi-chevron-right"></i>
        </div>
      </Col>
    </>
  )
}

export default ExploreCard
