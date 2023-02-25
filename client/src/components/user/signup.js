import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'
import React, { useState, useRef } from 'react'; 


export default function Signup() {
    const [ FirstName, setFirstName ] = useState("")
    const [ LastName, setLastName ] = useState("")
    const [ UserName, setUserName ] = useState("")
    const [ Email, setEmail ] = useState("")
    const [ PhoneNumber, setPhoneNumber ] = useState("")

  function onSubmit(e) {
    e.preventDefault();
    console.log(FirstName);
    console.log(LastName);
    console.log(UserName);
    console.log(Email);
    console.log(PhoneNumber);
  }
    // const handleSubmit = () => {
    //     setUpdated(inputRef.current.value);
    // }



    return (
        <section className="login-signup-main">
            <img src={mountainPic} alt="" className='background-pic' />
            <div className='login-back-plate'></div>
            <form className='login-info-plate' onSubmit={onSubmit}>
                <Link to="/login"
                    id='to-signin'
                    className='login-f-btns'> ← go to login
                    </Link>
                <div className='login-title'>Signup</div>
                <div className='login-info-flex'>
                    <input type="text" 
                    value={FirstName} 
                    className='login-info' 
                    name='fname' 
                    placeholder='First Name' 
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input type="text" 
                    value={LastName} 
                    className='login-info' 
                    name='lname' 
                    placeholder='Last Name' 
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <input type="text" 
                    value={UserName} 
                    className='login-info' 
                    name='uname' 
                    placeholder='Username' 
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <input type="text" 
                    value={Email}
                    className='login-info' 
                    name='email' 
                    placeholder='Email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input type="text" 
                    value={PhoneNumber}
                    className='login-info' 
                    name='phone' 
                    placeholder='Phone Number' 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    />
                </div>
                <div className='submit-button-flex'>
                    <input 
                    id='signup-submit' 
                    type='submit'
                    className='login-f-btns'
                    value="submit" />
                </div> 
            </form>
        </section>
    )
}