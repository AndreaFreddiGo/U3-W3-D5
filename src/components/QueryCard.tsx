import { Card, Col } from 'react-bootstrap'
import ISongs from '../types/Songs'

interface QueryCardProps {
  song: ISongs
}

const QueryCard = (props: QueryCardProps) => {
  return (
    <>
      <Col className="col-3 col-md-2 bg-secondary rounded-2 m-1 m-md-2 flex-grow-1 bg-transparent">
        <Card className="bg-transparent text-light border-0">
          <Card.Img
            className="rounded-2"
            variant="top"
            src={props.song.album.cover_xl}
          />
          <Card.Body className="p-0 pt-1">
            <Card.Title className="queryCard m-0">
              {props.song.title}
            </Card.Title>
            <Card.Text className="opacity-50 queryCard pt-1">
              {props.song.artist.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default QueryCard
