'use client'
import React, { useState } from "react";

const FormSub = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    // check for email validation
    const [isValid , setIsValid]= useState(false);
    const handleInput = (e) => {
        setName(e.target.value);
    }
    const handlAge = (e) => {
        setAge(e.target.value);
    }
    const handlEmail = (e) => {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       const emailValue = e.target.value;
       setEmail(emailValue)
        setIsValid(emailValid.test(emailValue));
        console.log(emailValid.test(emailValue));
    }
    const handleCountry = (e)=>{
        setCountry(e.target.value);
    }
    const handleCity = (e)=>{
        setCity(e.target.value);
    }
    const handleForm = (e) => {

        e.preventDefault();
        if(name === '' || age === '' || email === ''){
        alert(`before submiting the form you have to give name , age and email`);
        }
        if(country === '' || city === ''){
            alert('Please select a country and enter a city.')
        }
        if(age <18){
            setMessage('You must be at least 18 years old.')
            return;
        }
        if(!isValid){
            setMessage('Invalid email address')
        }else{
            setMessage(`Hello, ${name}!`)
        }
        if(country !== '' && city !== ''){
        setMessage(`You have selected ${country} and ${city}`)
        }
    }
    return (
        <>
            <h2>HEllO LETS'S HANDLE FORM INPUT AND SUBMISSION</h2>
            <form action="" onSubmit={handleForm}>
                <input type="text" placeholder="input name" onChange={handleInput} value={name} />
                <input type="number" placeholder="input age" onChange={handlAge} value={age}/>
                <input type="text" placeholder="input email" onChange={handlEmail} value={email}/>
                <select onChange={handleCountry} value={country}>
                    <option value=""> select a Country</option>
                    <option value="india"> india</option>
                    <option value="usa"> usa</option>
                    <option value="kajakistan"> kajakistan</option>
                    <option value="russia">russia</option>
                    <option value="china">china</option>
                </select>
                <input type="text" placeholder="input city" onChange={handleCity} value={city} />
                    <p>{message}</p>
                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default FormSub;