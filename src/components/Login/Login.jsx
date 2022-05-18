import React from 'react';
// import ReactDOM from 'react-dom';
import './login.css'


function Login() {
    return (
        <div>
            <div className="login-form-container">
                <div className="hero-img">
                    <img src={require('./hero.png')} alt="hero img" />
                </div>
                <div className="login-form-wrapper">
                    <form className='login-form'>
                        <h2>Login</h2>
                        <div className='form-unique-id'>
                            <label htmlFor="unique-id">Unique ID</label>
                            <input type="text" name="unique-id" id="unique-id" />
                        </div>
                        <div className="form-passcode">
                            <label htmlFor="passcode">Passcode</label>
                            <input type="password" name="passcode" id="passcode" />
                        </div>
                        <input className="form-submit" type="submit" value="Login" />
                        <div className="registration-link-container">
                            Don't have an account? <span className='registration-link'>Register</span> here
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);

export default Login;