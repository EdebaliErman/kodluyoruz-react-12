import React, { useEffect, useState } from 'react'
import { useWaether } from '../context/WeatherContex'


function Card() {
    const { weather, current } = useWaether()
    const [day, setDay] = useState()
    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    useEffect(() => {
        !weather ? console.log("yükleniyor...") : console.log("yüklendi")

        setDay(daysOfWeek)
    }, [weather])
    
    const icon_src = `http://openweathermap.org/img/w/`


    return (
        <div className='Card'>
            
            <>{weather &&

                weather.map((item, id) =>
                    item.weather.map((weather) =>

                        <div key={weather.id}>
                            <h1> {day[id]}</h1>
                            <img src={icon_src + weather.icon + ".png"} alt={icon_src} />
                            <br></br>
                            <h3>{weather.description}</h3>
                            <h3>{current.temp_min} °C {current.temp_max} °C</h3>
                        </div>
                    ))
            }
            </>
             
        </div>
    )
}

export default Card
