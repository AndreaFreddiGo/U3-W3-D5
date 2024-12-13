import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppleNavbar from './components/AppleNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import AppleMain from './components/AppleMain'
import { useState } from 'react'
import ISongs from './types/Songs'

function App() {
  const [query, setQuery] = useState('')
  const [arrayOfSongs, setArrayOfSongs] = useState<ISongs[]>([])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      )
      const data = await response.json()
      console.log(data.data)
      setArrayOfSongs(data.data)
      setQuery('')
    } catch (error) {
      console.error('Error fetching the songs:', error)
    }
  }

  return (
    <Container fluid>
      <Row className="d-flex flex-column flex-md-row">
        <Col className="col-12 col-md-2 d-flex justify-content-start flex-column bg-secondary">
          <AppleNavbar
            onSubmit={handleSubmit}
            query={query}
            setQuery={setQuery}
          />
        </Col>
        <Col className="col-12 col-md-10 d-flex justify-content-start flex-column bg-dark px-0">
          <AppleMain songs={arrayOfSongs} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
