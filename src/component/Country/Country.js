import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)

    const {name, population, flags} = props.country;
    return (
        <div className='countries'>
            <h1>Namer: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;