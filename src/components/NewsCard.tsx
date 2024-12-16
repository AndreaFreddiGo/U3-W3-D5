import { Card, Col } from 'react-bootstrap'
import newCardImg1 from '../assets/images/1a.png'
import newCardImg2 from '../assets/images/1b.png'
import newCardImg3 from '../assets/images/1c.png'

const NewsCard = () => {
  return (
    <>
      <Col className="col-8 col-md-5 bg-secondary rounded-3 m-1 m-md-2 bg-transparent flex-grow-1">
        <Card className="bg-transparent text-light border-0">
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Pròlogo con Abuelo
            </Card.Title>
          </Card.Body>
          <Card.Img className="rounded-2" variant="top" src={newCardImg1} />
        </Card>
      </Col>
      <Col className="col-8 col-md-5 bg-secondary rounded-3 m-1 m-md-2 bg-transparent flex-grow-1">
        <Card className="bg-transparent text-light border-0">
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Pròlogo con Abuelo
            </Card.Title>
          </Card.Body>
          <Card.Img className="rounded-2" variant="top" src={newCardImg2} />
        </Card>
      </Col>
      <Col className="col-8 col-md-5 bg-secondary rounded-3 m-1 m-md-2 bg-transparent flex-grow-1 d-none">
        <Card className="bg-transparent text-light border-0">
          <Card.Body className="p-0">
            <Card.Title className="radioCardTitle opacity-75 pt-1">
              Pròlogo con Abuelo
            </Card.Title>
          </Card.Body>
          <Card.Img className="rounded-2" variant="top" src={newCardImg3} />
        </Card>
      </Col>
    </>
  )
}

export default NewsCard
