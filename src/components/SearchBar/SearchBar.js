import React from "react";
import { MdSearch } from "react-icons/md";
import './SearchBar.css'

const SearchBar = ({setSearchText}) => {

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input onChange={handleSearch} type='text' placeholder="type to search.." />
        </div>
    )
}

export default SearchBar