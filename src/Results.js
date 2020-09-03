import React, {useState, useEffect} from 'react'
import "./results.css";
import VideoCard from "./VideoCard";
import requests from "./requests";
import axios from "./axios";
import FlipMove from 'react-flip-move';


function Results({selectedOption}) {
    const [ movies, setMovies ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [selectedOption])
    return (
        <FlipMove>
            <div className="results">
            {movies.map((movie)=>(
                <VideoCard movie={ movie } key={movie.id}/>
            ))}
            </div>
        </FlipMove>
        
    )
}

export default Results
