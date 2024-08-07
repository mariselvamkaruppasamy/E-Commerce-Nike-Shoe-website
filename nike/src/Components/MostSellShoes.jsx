import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../Components/MostSellShoes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const MostSellShoes = () => {

    const [cardData, setCardData] = useState([])
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("http://localhost:4500/product/productlistz")
                .then(res => setCardData(res.data))
                .catch(err => console.log(err))
        };

        fetchData()
    }, [])

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Your Fav Sneakers.."
                    onChange={(e)=> setSearchData(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <Container className='cards'>
                {
                    searchData === '' ? <div></div>:
                    cardData.filter((details)=> details.productName.toLowerCase().includes(searchData)).map((details) => (
                        <div className="shoesCards" key={details._id}>
                            <p className="offr">-{details.productDiscount}%</p>
                            <div className="images">
                                <img src={`http://localhost:4500/${details.productImage[0]}`} alt={details.productName} />
                            </div>
                            <h3>{details.productName}</h3>
                            <div className="amnt">
                                <p className="discnt">₹{details.productOldAmount}</p>
                                <p className="curnt">₹{details.productAmount}</p>
                            </div>
                            <br />
                        </div>
                    ))
                }
            </Container>
        </>
    )
}
