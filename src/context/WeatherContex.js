import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeaterContext = createContext()
export const WeaterProvider = ({ children }) => {

    const [weather, setWeather] = useState()
    const [city, setCity] = useState("Adana")
    const [current, setCurrent] = useState()
   
    

    useEffect(() => {
        const key = "1267cb9050fc373669749d1313b6c5b7"
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=tr&cnt=7`)
            .then((res) => {
                setWeather(res.data.list)
                res.data.list.map((item) => setCurrent(item.main))
                
            }
            )
    }, [city])
    const values = { weather, setWeather, city, setCity, current }
   
    return <WeaterContext.Provider value={values}>{children}</WeaterContext.Provider>
}

export const useWaether = () => useContext(WeaterContext)


