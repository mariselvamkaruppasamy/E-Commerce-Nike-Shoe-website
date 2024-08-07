import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/MenSneaker.css';
import axios from 'axios';

export const MenSneaker = () => {
  const [menSneaker, setMenSneaker] = useState([]);
  const category = 'Men';
  const navigate = useNavigate('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:4500/product/productlistz');
        setMenSneaker(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();

    
  }, []);

  const handleCardClick = (id) => {
    navigate(`/cdetails/${id}`);
  };

  return (
    <>
      <Container fluid className='men-header'>
        <h4>FLAT 40% OFF | MEN'S FOOTWEAR</h4>
        <p>+ EXTRA 15% OFF ON ORDERS ABOVE ₹5599*</p>
        <Link className='men-link' to=''>SHOP NOW</Link>
      </Container>
      <Container className='men-sneaker'>
        {menSneaker.filter(i => i.productCatagory === category).map(i => (
          <div className='shoesCards' key={i._id} onClick={() => handleCardClick(i._id)}>
            <div>
              <p className='offr'>-{i.productDiscount}%</p>
              <div className='images'>
                <img src={`http://localhost:4500/${i.productImage[0]}`}/>
              </div>
              <h3>{i.productName}</h3>
              <div className='amnt'>
                <p className='discnt'>₹{i.productOldAmount}</p>
                <p className='curnt'>₹{i.productAmount}</p>
              </div>
            </div>
            <br />
          </div>
        ))}
      </Container>
    </>
  );
};