import { useState, useEffect } from 'react';
import{ getPosts } from '../../services/post.js';
import { Link } from "react-router-dom"

function CountryMap() {
    const [ countries, setCountries ] = useState([])

    useEffect(() => {
        async function getAllCountries(){
            const response = await getPosts()
            setCountries(response)
        }
         getAllCountries()

    }, [])

    return (
        <div>
       {countries.map((country) => (
        <Link to={`/country/${country.location}`}>
            <p>{country.location}</p>
        </Link>
        ))}
        </div>
    )
}

export default CountryMap;