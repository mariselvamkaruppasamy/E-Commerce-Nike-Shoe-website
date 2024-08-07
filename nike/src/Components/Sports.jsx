import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import '../Components/Sports.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Sports = () => {

    const [sportsSneaker, setSportsSneaker] = useState([]);
    const category = 'Sports';
    const navigate = useNavigate('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:4500/product/productlistz');
                setSportsSneaker(res.data);
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
            <Container fluid className='sports-header'>
                <h4>GET EXTRA 25% OFF | SPORTS SNEAKERS</h4>
                <p>EXCLUSIVE NEW COLLECTION | LIMITED EDITION</p>
                <Link className='sports-link' to=''>SHOP NOW</Link>
            </Container>
            <Container className='sports-sneaker'>
                {sportsSneaker.filter(i => i.productCatagory === category).map(i => (
                    <div className='shoesCards' key={i._id} onClick={() => handleCardClick(i._id)}>
                        <div>
                            <p className='offr'>-{i.productDiscount}%</p>
                            <div className='images'>
                                {/* <p className='heartz'><CiHeart /></p> */}
                                <img src={`http://localhost:4500/${i.productImage[0]}`} alt={i.productName} />
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
    )
}

