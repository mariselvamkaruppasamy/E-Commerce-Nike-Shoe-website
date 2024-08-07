import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { cartDetailsContext } from '../App';
import '../Components/AddCart.css';

export const AddCart = () => {
  const [data, setData] = useState([]);
  const [insrt, setInsrt] = useState([]);
  const [quantities, setQuantities] = useState({});
  const { userId } = useContext(cartDetailsContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4500/product/productlistz");
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:4500/userdata/addcart/${userId}`);
        const { cartList } = response.data;
        localStorage.setItem('cartlist', JSON.stringify(cartList));
        setInsrt(cartList);
        const initialQuantities = cartList.reduce((acc, productId) => {
          acc[productId] = 1;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (err) {
        console.error(err);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleQuantityChange = (productId, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[productId] + change;
      if (newQuantity > 0) {
        return { ...prevQuantities, [productId]: newQuantity };
      }
      return prevQuantities;
    });
  };

  const calculateTotalAmount = () => {
    return data
      .filter((product) => insrt.includes(product._id))
      .reduce((total, product) => {
        const quantity = quantities[product._id] || 1;
        return total + product.productAmount * quantity;
      }, 0);
  };

  const handleCheckout = async (productId) => {
    alert('Order Placed!')
  };

  return (
    <Container className='add-cart'>
      {data.length === 0 ? (
        <p>No products available.</p>
      ) : insrt.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {data
            .filter((product) => insrt.includes(product._id))
            .map((product) => (
              <div key={product._id} className='cart-ctn'>
                <div className="cart-img">
                  <img src={`http://localhost:4500/${product.productImage[0]}`} alt={product.productName} height={'300px'} width={'350px'} />
                </div>
                <div className="details">
                  <h3>{product.productName}</h3>
                  <div className="qun-btn">
                    <button onClick={() => handleQuantityChange(product._id, -1)}>-</button>
                    <span>{quantities[product._id] || 1}</span>
                    <button onClick={() => handleQuantityChange(product._id, 1)}>+</button>
                  </div>
                  <div className="total-amount">
                    <h4>Total Amount: ${calculateTotalAmount().toFixed(2)}</h4>
                  </div>
                  <div className="shop">
                    <button onClick={() => handleCheckout(product._id)} className='shop-now'>SHOP NOW</button>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </Container>
  );
};
