import { Row } from 'react-bootstrap'
import ExploreCard from './ExploreCard'
import ApplePlayer from './ApplePlayer'
import QueryCard from './QueryCard'
import ISongs from '../types/Songs'

interface AppleMainProps {
  songs: ISongs[]
}

const AppleMain = (props: AppleMainProps) => {
  return (
    <Row className="d-flex flex-column mx-0 px-0">
      <div className="d-flex px-0">
        <ApplePlayer />
      </div>
      <div className="d-flex px-0">
        <h1 className="text-light">Novità</h1>
      </div>
      <div className="d-flex px-0">
        <h1 className="text-light">Nuovi episodi radio</h1>
      </div>
      <div className="px-0">
        <h1 className="text-light">Nuove uscite</h1>
        <div className="d-flex flex-wrap justify-content-evenly">
          {props.songs.map((s) => {
            return <QueryCard song={s} />
          })}
        </div>
      </div>
      <div className="px-0">
        <h1 className="text-light">Altro da esplorare</h1>
        <div className="d-flex flex-column flex-md-row flex-wrap justify-content-evenly">
          <ExploreCard />
        </div>
      </div>
    </Row>
  )
}

export default AppleMain
