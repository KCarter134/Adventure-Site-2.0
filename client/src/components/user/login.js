import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
    const [ UserName, setUserName ] = useState("");
    const [ Email, setEmail ] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        console.log(UserName)
        console.log(Email)
    }

    return (
        <section className="login-signup-main">
            <img src={mountainPic} alt="" className='background-pic' />
            <div className='login-back-plate'></div>
            <form className='login-info-plate' onSubmit={onSubmit}>
                <div className='login-title'>Login</div>
                <div className='login-info-flex'>
                    <input 
                    type="text" 
                    className='login-info' 
                    id='uname' 
                    placeholder='Username' 
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    className='login-info' 
                    id='email' 
                    placeholder='Email' 
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='submit-button-flex'>
                    <input 
                    id='login-submit' 
                    value="login"
                    type='submit'
                    className='login-f-btns' /> 

                    <Link to="/signup"
                    id='to-signin'
                    className='login-f-btns'> 
                    Signup
                    </Link>
                </div>
            </form>
        </section>
    )
}