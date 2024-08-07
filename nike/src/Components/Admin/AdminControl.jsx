import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './AdminControl.css';


export const AdminControl = () => {
  const [userData, setUserData] = useState([]);



  const [productName, setProductName] = useState('');
  const [productAmount, setProductAmount] = useState('');
  const [productOldAmount, setProductOldAmount] = useState('');
  const [productDiscount, setProductDiscount] = useState('');
  const [productCatagory, setProductCatagory] = useState('');
  const [productImage, setProductImage] = useState([]);
  const [productSubImages, setProductSubImages] = useState([]);

  const productAdded = async (e) => {
    e.preventDefault();

    const productFormData = new FormData();
    productFormData.append('productName', productName);
    productFormData.append('productAmount', productAmount);
    productFormData.append('productOldAmount', productOldAmount);
    productFormData.append('productDiscount', productDiscount);
    productFormData.append('productCatagory', productCatagory);

    for (const file of productImage) {
      productFormData.append('productImage', file)
    }

    for (const file of productSubImages) {
      productFormData.append('productSubImages', file)
    }

    try {
      await axios.post('http://localhost:4500/product/productinsert', productFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Product added Successfully');
      setProductName('');
      setProductAmount('');
      setProductOldAmount('');
      setProductDiscount('');
      setProductCatagory('');
      setProductImage([]);
      setProductSubImages([]);
    }
    catch (err) {
      console.log(err);
      alert('Product Added Failed')
    }
  }



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4500/userdata/userlist');
        setUserData(response.data);
      } catch (err) {
        console.log(err);
        
      }
    };

    fetchUserData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:4500/userdata/userdelete/${userId}`);
      setUserData(userData.filter(user => user._id !== userId));
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <>
      <Container fluid className="userListz">
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((userDetails) => (
                <tr key={userDetails._id}>
                  <td>{userDetails._id}</td>
                  <td>{userDetails.fullName}</td>
                  <td>{userDetails.userName}</td>
                  <td>{userDetails.userEmail}</td>
                  <td>{userDetails.userNumber}</td>
                  <td>
                    <div className="actionz">
                      <button className="delete" onClick={() => deleteUser(userDetails._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <Container fluid className='addProduct'>
        <form onSubmit={productAdded} className='productForm'>
          <h3>Add New Arrival</h3>
          <input type="text"
            required
            placeholder='Product Name'
            onChange={(e) => setProductName(e.target.value)}
          />
          <input type="number"
            required
            placeholder='Product Amount'
            onChange={(e) => setProductAmount(e.target.value)}
          />
          <input type="number"
            required
            placeholder='Old Amount'
            onChange={(e) => setProductOldAmount(e.target.value)}
          />
          <input type="number"
            required
            placeholder='Discount'
            onChange={(e) => setProductDiscount(e.target.value)}
          />
          <input type="texy"
            required
            placeholder='Product Catagory'
            onChange={(e) => setProductCatagory(e.target.value)}
          />
          <div className="inpt-files">
            <input type="file"
              required
              placeholder='Product Image'
              onChange={(e) => setProductImage(e.target.files)}
            />
            <input type="file" multiple
              required
              placeholder='Sub Images'
              onChange={(e) => setProductSubImages(e.target.files)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </Container>
    </>
  );
};