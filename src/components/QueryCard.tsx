import { Card, Col } from 'react-bootstrap'
import ISongs from '../types/Songs'

interface QueryCardProps {
  song: ISongs
}

const QueryCard = (props: QueryCardProps) => {
  return (
    <>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-2 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img variant="top" src={props.song.album.cover_xl} />
          <Card.Body>
            <Card.Title>{props.song.title}</Card.Title>
            <Card.Text>{props.song.artist.name}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default QueryCard
