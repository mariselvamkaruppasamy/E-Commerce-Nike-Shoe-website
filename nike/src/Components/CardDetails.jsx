import '../Components/CardDetails.css';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { cartDetailsContext } from '../App';

export const CardDetails = () => {
  const { id } = useParams();
  const [cartData, setCartData] = useState({});
  const navigate = useNavigate();
  const { userId, userProduct, setUserProduct } = useContext(cartDetailsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:4500/product/productlistz/${id}`);
        setCartData(response.data);
      } catch (err) {
        alert('Failed to fetch product details');
        console.error(err);
      }
    };
    getData();
  }, [id]);

  const clickAddToCart = async () => {
    if (userId) {
      try {
        await axios.post(`http://localhost:4500/userdata/updateUser/${userId}`, {
          productId: String(id),
        });

        setUserProduct(prevProducts => [...prevProducts, id]);

        alert('Product Added to Cart');
        navigate('/addcart');
      } catch (err) {
        alert('Add to cart Failed');
        console.error(err);
      }
    } else {
      alert('Please Login first to add to the cart!');
      navigate('/ulogin')
    }
  };


  return (
    <Container className='card-details'>
      <div className="product-imgs">
        {cartData.productSubImages && cartData.productSubImages.map((image, index) => (
          <img key={index} src={`http://localhost:4500/${image}`} alt={`Sub Image ${index + 1}`} height={'400px'} width={'300px'} />
        ))}
        {cartData.productImage && cartData.productImage.length > 0 && (
          <img src={`http://localhost:4500/${cartData.productImage[0]}`} height={'400px'} width={'300px'} alt="Product" />
        )}
      </div>
      <div className="details">
        <h1>{cartData.productName}</h1>
        <h4>₹{cartData.productAmount}</h4>
        <p className='gst'>Prices include GST</p>
        <div className="addCart">
          <button onClick={clickAddToCart}>Add to Cart</button>
        </div>
      </div>
    </Container>
  );
};
