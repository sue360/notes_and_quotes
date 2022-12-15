// React Components
import { useState, useEffect, React } from 'react'
import axios from 'axios'

//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


const Gallery = () => {

  //! state
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getNotes = async () => {
      try {
        const { data } = await axios.get('/notes/')
        setNotes(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getNotes()
  }, [])

  return (
    <main className='main'>
      <div className='home-hero'>
        <h1 className='display-3'>notes & quotes</h1>
      </div>
      <div className='notes-container'>
        <Container className='mt-4'>
          <Row>
            {notes.length > 0 &&
              notes.map(note => {
                const { id, Content, } = note
                console.log(id)
                console.log(Content)
                return (
                  <Col key={id} md='6' lg='4' className='gallery-note-card mb-4'>
                    <Link to={`/notes/${id}/`}> 
                      <Card className='note-card'>
                        <Card.Body>
                          <Card.Title className='mb-0'>{Content}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>   
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
  </main>
  )
}


export default Gallery