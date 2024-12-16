import { Card, Col } from 'react-bootstrap'
import radioCardImg1 from '../assets/images/2a.png'
import radioCardImg2 from '../assets/images/2b.png'
import radioCardImg3 from '../assets/images/2c.png'
import radioCardImg4 from '../assets/images/2d.png'
import radioCardImg5 from '../assets/images/2e.png'
import radioCardImg6 from '../assets/images/2f.png'

const RadioCard = () => {
  return (
    <>
      <Col className="col-11 flex-grow-1 mx-1 mb-0 mx-md-2">
        <div className="d-flex">
          <p className="text-light m-0 fs-5 fw-semibold">
            Nuovi episodi radio{' '}
          </p>
          <i className="text-light bi bi-chevron-right opacity-50 px-1 pt-1 fs-6 "></i>
        </div>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg1} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Pròlogo con Abuelo
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg2} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              The Wanderer
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg3} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Micheal Bublé & Carly Pearce
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg4} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Stephan Moccio: The Zane Lowe Interview
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg5} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Chart Spotlight: Julia Micheals
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent d-md-none ">
        <Card className="bg-transparent text-light border-0">
          <Card.Img className="rounded-2" variant="top" src={radioCardImg6} />
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Karri & Travis Mills
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default RadioCard
