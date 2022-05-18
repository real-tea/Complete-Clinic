import React from 'react';
// import ReactDOM from 'react-dom';
import './register.css'


function Register() {
    return (
        <div>
            <div className="register-form-container">
                <div className="hero-img">
                    <img src={require('./hero.png')} alt="hero img" />
                </div>
                <div className="register-form-wrapper">
                    <form className='register-form'>
                        <h2>Register</h2>
                        <div className='form-fullname'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="fullname" id="fullname" />
                        </div>
                        <div className='form-email'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-passcode">
                            <label htmlFor="passcode">Passcode</label>
                            <input type="password" name="passcode" id="passcode" />
                        </div>
                        <div className="form-confirm-passcode">
                            <label htmlFor="confirm-passcode">Passcode</label>
                            <input type="password" name="confirm-passcode" id="confirm-passcode" />
                        </div>
                        <input className="form-submit" type="submit" value="Register" />
                        <div className="login-link-container">
                            Aleready have an account? <span className='login-link'>Login</span> here
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);

export default Register;