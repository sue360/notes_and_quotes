// React Components
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Imports from Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'




const Upload = () => {

  const [quotes, setQuotes] = useState([])

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

  const [uploadField, setUploadField] = useState({
    Content: '', //submitting to the content key
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    const updatedField = {
      ...uploadField,
      [e.target.name]: e.target.value,
    }
    setUploadField(updatedField)
  }

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(uploadField)
    try {
      await axios.post('/notes', uploadField)
      console.log('post created')
    } catch (err) {
      console.log(err.response.data.message)
      setError(err.response.data.message)
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
              placeholder="what are you grateful for today?"
              className="textarea"
            />
            <div>
              <button className="create-note-button">
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