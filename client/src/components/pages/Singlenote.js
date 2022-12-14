import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { isOwner, getToken } from '../../components/helpers/auth'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Singlenote = () => {
 // ! State
 const [ singleNote, setSingleNote ] = useState({
  Content: '', 
})
 const [ errors, setErrors ] = useState(false)

 // ! Location
 const { id } = useParams()

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
         { singleNote ? 
           <>
             <h1 className='mb-4'>{singleNote.Content}</h1>
           </>
           :
           errors ? <h2>Something went wrong! Please try again later!</h2> : <h2>Loading</h2>
         }
       </Row>
     </Container>
   </main>
 )

  
}

export default Singlenote