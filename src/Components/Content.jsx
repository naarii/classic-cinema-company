import React, {useState} from "react";
import Home from "./Home";
import sampleFilms from '../films.json';

const Content = () => {
    const [films, setFilms] = useState(sampleFilms);
    return(<div><Home nowShowingFilms={films.films}/></div>);
}

export default Content;