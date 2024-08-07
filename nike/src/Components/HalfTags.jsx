import { Container } from 'react-bootstrap'
import '../Components/HalfTags.css'

export const HalfTags = () => {
  return (
    <>
        <Container fluid className='Tags'>
            <div className="div1">
                <h6>Nike Shoes</h6>
                <h1>The Summer Sale</h1>
                <h1>Off 50%</h1>
                <button>Explore Now</button>
            </div>
            <div className="div2">
                <h6>Nike Shoes</h6>
                <h1>Make Yourself</h1>
                <h1>Keep Smoothly</h1>
                <button>Explore Now</button>
            </div>
        </Container>
    </>
  )
}
