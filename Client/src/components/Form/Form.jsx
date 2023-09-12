import {useState} from "react";
import validation from "../Validation";
import styledForm from "./Form.module.css";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData]= useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return <div className = {styledForm.content}>
    <form onSubmit={handleSubmit}className = {styledForm.login}>
        
        <label htmlFor="email"className = {styledForm.title}>Email:</label>
        <input type="text" name='email' value={userData.email}
        onChange = {handleChange}className={styledForm.input}/>
        {errors.email && <p>{errors.email}</p>}
        <hr/>
        <label htmlFor="password"className = {styledForm.title}>Password:</label>
        <input type="text" name="password" value={userData.password}
        onChange = {handleChange}className={styledForm.input}/>
        {errors.password && <p>{errors.password}</p>}
        
        <button className={styledForm.button}>Submit</button>
    </form>
    </div>
}

export default Form;