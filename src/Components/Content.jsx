import React, {useState} from "react";
import Home from "./Home";
import Signup from "./Signup";
import sampleFilms from '../films.json';

const Content = () => {
    const [films, setFilms] = useState(sampleFilms);
    //return(<div><Home nowShowingFilms={films.films}/></div>);
    return(<div><Signup/></div>);
}

export default Content;