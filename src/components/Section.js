import React from 'react'
import { useWaether } from '../context/WeatherContex'
import cties from '../json/cities.json'

function Section() {

    const { setCity } = useWaether()
    const handleChange = ((citySelect) => {
        setCity(citySelect.target.value)
    })
    return (
        <div>
            <h1 className='HeadText'>weather forecast </h1>

            <div className='custom-select' >
                <select onChange={handleChange}>
                    {
                        cties.map((city) =>
                            < option key={city.id} > {city.name}</option>
                        )
                    }
                </select>
                    
            </div>

        </div >
    )
}

export default Section
