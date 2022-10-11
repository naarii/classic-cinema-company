import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
import sampleFilms from '../films.json';
import SingupDetails from "./utils/SingupDetails.model";

const Content = () => {
    const [films, setFilms] = useState(sampleFilms);
    const submitSignUpDetails = (title, firstName, lastName, email, phone, dateOfBirth, gender) => {
        const signUpDetails = new SingupDetails(title, firstName, lastName, email, phone, dateOfBirth, gender);
        console.log(signUpDetails);
    };
    return(
        <Routes>
            <Route exact path="/" element={<Home nowShowingFilms={films.films} />} />
            <Route exact path="/signup" element={<Signup submitSignUpDetails={submitSignUpDetails} />} />
        </Routes>
    );
}

export default Content;