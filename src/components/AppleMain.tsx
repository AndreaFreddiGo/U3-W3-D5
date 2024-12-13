import { Container, Row } from 'react-bootstrap'
import ExploreCard from './ExploreCard'
import ApplePlayer from './ApplePlayer'
import QueryCard from './QueryCard'
import ISongs from '../types/Songs'

interface AppleMainProps {
  songs: ISongs[]
}

const AppleMain = (props: AppleMainProps) => {
  return (
    <Container className="m-0 p-0">
      <Row className="d-flex flex-column">
        <div className="d-flex">
          <ApplePlayer />
        </div>
        <div className="d-flex">
          <h1 className="text-light">Novità</h1>
        </div>
        <div className="d-flex">
          <h1 className="text-light">Nuovi episodi radio</h1>
        </div>
        <div>
          <h1 className="text-light">Nuove uscite</h1>
          <div className="d-flex flex-wrap justify-content-evenly">
            {props.songs.map((s) => {
              return <QueryCard song={s} />
            })}
          </div>
        </div>
        <div>
          <h1 className="text-light">Altro da esplorare</h1>
          <div className="d-flex">
            <ExploreCard />
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default AppleMain
