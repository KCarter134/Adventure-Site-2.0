import mountainPic from '../../assets/pictures/mountain.jpg'
import { Link } from 'react-router-dom'
import React, { useState, useRef, Component } from 'react'; 


class Signup extends Component {
    state = {
        tagged: false,
        message: '',
        name: ''
    }

    handleClick(e) {
        // access input values in the state
        console.log(this.state) // {tagged: true, input1: 'text', input2: 'text2'}
        this.setState({tagged: true});
        e.preventDefault();
        console.log('The link was clicked.');
    }

    handleInputChange = (e, input) => {
        this.setState({
         [input]: e.target.value
       })
      }

    // const [updated, setUpdated] = useState('');
    // const inputRef = useRef(null);

    // const handleSubmit = () => {
    //     this.preventDefault();
    //     setUpdated(inputRef.current.value).innerHTML;
    // }


    render() {
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
                        <input type="text" onChange={(e) => this.handleInputChange(e, 'input1')} className='login-info' name='fname' placeholder='First Name' />
                        <input type="text" className='login-info' name='lname' placeholder='Last Name' />
                        <input type="text" className='login-info' name='uname' placeholder='Username' />
                        <input type="text" className='login-info' name='email' placeholder='Email' />
                        <input type="text" className='login-info' name='phone' placeholder='Phone Number' />
                    </div>
                    <div className='submit-button-flex'>
                    <button
                    onClick={(e) => this.handleClick(e)}
                    >
                    {this.state.tagged ? 'Tagged' : 'Tag ' } 
                </button>
                    </div> 
                    <p>
                    {this.state.tagged ? 'Clicked' : 'Still' }
                </p>
                </form>
            </section>
        )
    }
}

export default Signup;