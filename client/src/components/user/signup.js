import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'
import React, { useState, useRef } from 'react'; 


export default function Signup() {
    // const [updated, setUpdated] = useState('');
    // const inputRef = useRef(null);

  const fNameRef = useRef();
  const lNameRef = useRef();
  const uNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log(fNameRef.current.value);
    console.log(lNameRef.current.value);
    console.log(uNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
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
                    <input type="text" ref={fNameRef} className='login-info' name='fname' placeholder='First Name' />
                    <input type="text" ref={lNameRef} className='login-info' name='lname' placeholder='Last Name' />
                    <input type="text" ref={uNameRef} className='login-info' name='uname' placeholder='Username' />
                    <input type="text" ref={emailRef} className='login-info' name='email' placeholder='Email' />
                    <input type="text" ref={phoneRef} className='login-info' name='phone' placeholder='Phone Number' />
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