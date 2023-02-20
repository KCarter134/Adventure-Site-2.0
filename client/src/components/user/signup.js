import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className="login-signup-main">
            <img src={mountainPic} alt="" className='background-pic' />
            <div className='login-back-plate'></div>
            <form className='login-info-plate'>
                <Link to="/login"
                    id='to-signin'
                    className='login-f-btns'> ← go to login
                    </Link>
                <div className='login-title'>Signup</div>
                <div className='login-info-flex'>
                    <input type="text" className='login-info' id='fname' placeholder='First Name'></input>
                    <input type="text" className='login-info' id='lname' placeholder='Last Name'></input>
                    <input type="text" className='login-info' id='uname' placeholder='Username'></input>
                    <input type="text" className='login-info' id='email' placeholder='Email'></input>
                    <input type="text" className='login-info' id='phone-num' placeholder='Phone Number'></input>
                </div>
                <div className='submit-button-flex'>
                    <div 
                    id='signup-submit' 
                    type='submit'
                    className='login-f-btns'> 
                    Submit
                    </div>
                    
                </div>
            </form>
        </section>
    )
}