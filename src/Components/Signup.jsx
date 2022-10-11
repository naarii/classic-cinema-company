import React, {useState} from "react";
import HomeBanner from "../images/HomeBanner/HomeBanner_hmwvoh_c_scale,w_1143.png";

const Signup = (props) => {
    const [title, setTitle] = useState(``);
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [email, setEmail] = useState(``);
    const [phone, setPhone] = useState(``);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [gender, setGender] = useState(``);
    const handleSubmit = event => {
        event.preventDefault();
        props.submitSingUpDetails(title, firstName, lastName, email, phone, dateOfBirth, gender);
    };
    return (
        <div>
            <img className="top" src={HomeBanner} />
            <div>
                <p id="signUpText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed mollis neque, facilisis mattis tellus.
                    Curabitur quis nibh nec nunc fringilla mattis vitae eget nibh. Nullam blandit lorem at neque vulputate molestie.
                    Nam dolor enim, feugiat non dolor ac, iaculis viverra leo. Praesent sit amet tellus eget orci lacinia ornare at at purus.
                    Integer maximus consectetur ex, eu elementum quam molestie sed. Aliquam consequat efficitur urna, sit amet eleifend libero tempor id.
                    Etiam tristique nisl tortor, in convallis lacus fermentum sed. Phasellus varius viverra orci in pretium.
                </p>
                <div>
                    <form id="signUpForm"  onSubmit = {handleSubmit}>
                        <label>Title
                            <input type="text" value={title} onChange={ event => setTitle(event.target.value) } />
                        </label><br/>
                        <label>Name
                            <input type="text" value={firstName} onChange={ event => setFirstName(event.target.value) } />
                            <input type="text" value={lastName} onChange={ event => setLastName(event.target.value) } />
                        </label><br/>
                        <label>Email
                            <input type="text" value={email} onChange={ event => setEmail(event.target.value) } />
                        </label><br/>
                        <label>Phone
                            <input type="phone" value={phone} onChange={ event => setPhone(event.target.value) }/>
                        </label><br/>
                        <label>Date of birth
                            <input type="date" value={dateOfBirth} onChange={ event => setDateOfBirth(event.target.value) } />
                        </label><br/>
                        <label>Gender
                            <input type="checkbox" onChange={ event => setGender(event.target.checked )} />
                            Female
                            <input type="checkbox" />
                            Male
                            <input id="btn-sign-up" type="submit" value="Book Now" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;