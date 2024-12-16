import { Row } from 'react-bootstrap'
import ExploreCard from './ExploreCard'
import ApplePlayer from './ApplePlayer'
import QueryCard from './QueryCard'
import ISongs from '../types/Songs'
import AppleFooter from './AppleFooter'
import RadioCard from './RadioCard'
import NewsCard from './NewsCard'

interface AppleMainProps {
  songs: ISongs[]
  search: string
}

const AppleMain = (props: AppleMainProps) => {
  return (
    <Row className="d-flex flex-column mx-0 px-0 v-100">
      <div className="d-flex px-0 d-none d-md-block">
        <ApplePlayer />
      </div>
      <div className="px-3 px-md-4 pt-4 ">
        <p className="text-light fs-2 fw-bold mb-0">Novità</p>
        <hr className="text-light text-opacity-25 mt-2 mb-2" />
      </div>
      <div className="px-0">
        <div className="d-flex flex-nowrap justify-content-evenly px-3 overflow-hidden">
          <NewsCard />
        </div>
      </div>
      <div className="px-0">
        <div className="d-flex flex-wrap justify-content-evenly px-3">
          <RadioCard />
        </div>
      </div>
      <div className="px-3">
        {props.search && (
          <div className="d-flex ms-1 ms-md-2">
            <p className="text-light m-0 fs-5 fw-semibold">
              Hai cercato: {props.search}
            </p>
            <i className="text-light bi bi-chevron-right opacity-50 px-1 pt-1 fs-6 "></i>
          </div>
        )}

        <div className="d-flex flex-wrap justify-content-evenly">
          {props.songs.slice(0, 15).map((s) => {
            return <QueryCard song={s} key={s.id} />
          })}
        </div>
      </div>
      <div className="px-0">
        <div className="d-flex flex-column flex-md-row flex-wrap justify-content-evenly ">
          <ExploreCard />
        </div>
      </div>
      <div className="d-flex px-0 m-0">
        <AppleFooter />
      </div>
    </Row>
  )
}

export default AppleMain
