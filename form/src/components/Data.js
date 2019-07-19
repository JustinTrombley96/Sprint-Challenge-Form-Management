import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from './axiosWithAuth';

const Data = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/restricted/data')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="AllData">
        {data.map(data => {
            return (
            <div className="Data">
            {data.name}
            {data.age}
            {data.email}
            </div>
            )
        })}
        </div>
    )
}
export default Data