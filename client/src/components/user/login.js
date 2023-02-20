import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className="login-signup-main">
            <img src={mountainPic} alt="" className='background-pic' />
            <div className='login-back-plate'></div>
            <form className='login-info-plate'>
                <div className='login-title'>Login</div>
                <div className='login-info-flex'>
                    <input type="text" className='login-info' id='uname' placeholder='Username'></input>
                    <input type="text" className='login-info' id='email' placeholder='Email'></input>
                </div>
                <div className='submit-button-flex'>
                    <div 
                    id='login-submit' 
                    type='submit'
                    className='login-f-btns'> 
                    Login
                    </div>
                    <Link to="/signup"
                    id='to-signin'
                    className='login-f-btns'> Signup
                    </Link>
                </div>
            </form>
        </section>
    )
}