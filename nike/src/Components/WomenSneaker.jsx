import { Container } from 'react-bootstrap'
import '../Components/WomenSneaker.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const WomenSneaker = () => {

    const [womenSneaker, setWomenSneaker] = useState([]);
    const category = 'Women';
    const navigate = useNavigate('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:4500/product/productlistz');
                setWomenSneaker(res.data);
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
            <Container fluid className='women-header'>
                <h4>MEGA SALE 50% OFF | WOMEN'S FOOTWEAR</h4>
                <p>+ EXTRA 15% OFF ON ORDERS ABOVE ₹5599*</p>
                <Link className='women-link' to=''>SHOP NOW</Link>
            </Container>
            <Container className='women-sneaker'>
                {womenSneaker.filter(i => i.productCatagory === category).map(i => (
                    <div className='shoesCards' key={i._id} onClick={() => handleCardClick(i._id)}>
                        <div>
                            <p className='offr'>-{i.productDiscount}%</p>
                            <div className='images'>
                                <img src={`http://localhost:4500/${i.productImage[0]}`} />
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

