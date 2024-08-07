import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Components/SearchBarz.css'

export const SearchBarz = () => {
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Your Fav Sneakers..."
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
        </>
    )
}
