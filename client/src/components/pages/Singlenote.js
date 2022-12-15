import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { isOwner, getToken } from '../../components/helpers/auth'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Singlenote = () => {
  // ! State
  const [singleNote, setSingleNote] = useState({
    Content: '',
  })
  const [errors, setErrors] = useState(false)

  // ! State for upload form
  const [updateField, setUpdateField ] = useState({
    Content: '',
  })

  //function to update state with uploads from the upload field
  const handleContentUpdate = (e) => {
    console.log('event', e)
    setUpdateField({Content: e.target.value})
  }

  const handleNoteUpdate = async () => {
    try{
      const { data } = await axios.put(`/notes/${id}/`, updateField)
      console.log(data)
      setUpdateField({Content: ''})
    } catch (err) {
      console.log(err)
    }
  }

  //function to delete the current note

  const handleNoteDelete = async () => {
    try{
      await axios.delete(`/notes/${id}/`)
    } catch (err) {
      console.log(err)
    }
  }

  // ! Location
  const { id } = useParams()
  const { Content } = useParams()

  // ! Execution
  useEffect(() => {
    const getSingleNote = async () => {
      try {
        const { data } = await axios.get(`/notes/${id}/`)
        console.log(data)
        setSingleNote(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
        console.log(id)
      }
    }
    getSingleNote()
  }, [id])

  return (
          <main className='single-page'>
            <Container className='mt-4'>
              <Row>
                {singleNote ?
                  <>
                    <h1 className='mb-4'>{singleNote.Content}</h1>
                  </>
                  :
                  errors ? <h2>Something went wrong! Please try again later!</h2> : <h2>Loading</h2>
                }
              </Row>
            </Container>
            <div className='flex-container-update-notes'>
              <div>
                <textarea
                  placeholder= 'add your updated note here'
                  className="textarea"
                  value={updateField.Content}
                  onChange={handleContentUpdate}
                />
              </div>
            </div>
                <div>
                  <button className="create-note-button" onClick={handleNoteUpdate}>
                    update and share note
                  </button>
                </div>
                <div>
                  <button className='delete-note-button' onClick={handleNoteDelete}>
                    delete this note
                  </button>
              </div>

              </main>
        )

  
}

        export default Singlenote