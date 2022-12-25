import { useState, useEffect } from "react"
import './Cards.css'
const API_KEY = '6861a0db05msh88e1365ac49ba9bp19e2e4jsnedb56abe9794'
const API_HOST = 'covid-19-statistics.p.rapidapi.com'
const URL = 'https://covid-19-statistics.p.rapidapi.com/reports/total'

function Data() 
{
    const [val, setVal] = useState([]);

    /* Fetching data from API */
    async function getData()
    {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            }
        };

        let res = await fetch(URL, options)
        let ans = await res.json()
        console.log(ans.data);
        setVal(ans.data);
    }


    useEffect(() => {
        getData();
    }, [])
    

    /* Using the fetched data */
    return (
        <>
        <div className="container">
            <div className="box">
                <h1>Country</h1>
                <h2>INDIA</h2>
            </div>
            <div className="box">
                <h1>Active</h1>
                <h2>{val.active}</h2>
            </div>
            <div className="box">
                <h1>Confirmed</h1>
                <h2>{val.confirmed}</h2>
            </div>
            <div className="box">
                <h1>Deaths</h1>
                <h2>{val.deaths}</h2>
            </div>
            <div className="box">
                <h1>Fatality Rate</h1>
                <h2>{val.fatality_rate}</h2>
            </div>
            <div className="box">
                <h1>Date</h1>
                <h2>{val.date}</h2>
            </div>
        </div>
        </>
    )
}

export default Data