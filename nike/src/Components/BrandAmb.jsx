import { Container } from 'react-bootstrap'
import '../Components/BrandAmb.css'
import cr from '../Images/cr.jpg'
import sm from '../Images/sm.jpeg'
import lj from '../Images/lj.jpg'
import mj from '../Images/mj.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const BrandAmb = () => {
  return (
    <>
      <Container className='amb-head'>
        <h2>OUR BRAND AMBASSADORS</h2>
        <div class="card-container">
          <div class="card">
            <img src={cr} alt="Image 1" />
            <div class="card-content">
              <h4>Cristiano Ronaldo</h4>
              <div className="sl-icons">
                <p><FaInstagram /></p>
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={sm} alt="Image 2" />
            <div class="card-content">
              <h4>Smriti Mandhana</h4>
              <div className="sl-icons">
                <p><FaInstagram /></p>
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={lj} alt="Image 3" />
            <div class="card-content">
              <h4>Lebron James</h4>
              <div className="sl-icons">
                <p><FaInstagram /></p>
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src={mj} alt="Image 4" />
            <div class="card-content">
              <h4>Michael Jordan</h4>
              <div className="sl-icons">
                <p><FaInstagram /></p>
                <p><FaFacebookF /></p>
                <p><FaTwitter /></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
