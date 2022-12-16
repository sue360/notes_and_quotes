// React Components
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'




const Upload = () => {


  //for displaing quotes
  const [quotes, setQuotes] = useState([])
  const [uploadField, setUploadField] = useState({
    Content: '', //submitting new content
  })

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const { data } = await axios.get('/quotes/')
        setQuotes(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getQuotes()
  }, [])


  const navigate = useNavigate()
  const [error, setError] = useState('')

  //function to update state with uploads from the submit field
  const handleContentChange = (e) => {
    console.log('event', e)
    setUploadField({Content: e.target.value})
  }

  //submit form
  const handleNoteSubmit = async () => {
    try{
      const { data } = await axios.post('/notes/', uploadField)
      console.log(data)
      setUploadField({Content: ''})
      navigate('/gallery') //page to move on to
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <main className='main'>
      <div className='home-hero'>
        <h1 className='display-3'>notes & quotes</h1>
      </div>
      <div className='home-article'>
        <h2>welcome</h2>
        <div className='flex-container-quotes'>
          <div>
            <textarea
              value={uploadField.Content}
              onChange={handleContentChange}
              placeholder="what are you thankful for today?"
              className="textarea"
            />
            <div>
              <button className="create-note-button" onClick={handleNoteSubmit}>
                share note
              </button>
            </div>
          </div>
          <div className='sample-quotes'>
            <main className='main'>
              <div className='notes-container'>
                <Container className='mt-4'>
                  <Row>
                    {quotes.length > 0 &&
                      quotes.map(quote => {
                        const { id, Content, } = quote
                        console.log(id)
                        console.log(Content)
                        return (
                          <Col key={id} md='6' lg='4' className='note-card mb-4'>
                            <Card>
                              <div className='card-image'></div>
                              <Card.Body>
                                <Card.Title className='mb-0'>{Content}</Card.Title>
                              </Card.Body>
                            </Card>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </Container>
              </div>
            </main>

          </div>
        </div>
      </div>
    </main>
  )
}


export default Upload