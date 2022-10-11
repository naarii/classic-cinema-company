import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import sampleFilms from '../films.json';

const Content = () => {
    const [films, setFilms] = useState(sampleFilms);
    return(
        <Routes>
            <Route exact path="/" element={<Home nowShowingFilms={films.films} />} />
            <Route exact path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default Content;