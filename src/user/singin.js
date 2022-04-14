import { useState } from "react"
import soccer from "../images/login/soccer.webp"

export default function SigningIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email);
    console.log(password);


    

    return (
        <>
            <div className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="main_form">
                                <div className="row">
                                    <div className="logincontain">
                                        <div className="loginimg">
                                            <div className="text_style">
                                                <h1 className="img_text">Hello, Friend!</h1>
                                                <p className="img_text">Enter your Email & Password and start journey with us</p>
                                            </div>
                                        </div>
                                        <div className="fields">
                                            <div className="titlepage">
                                                <h3>Login</h3>
                                            </div>

                                            <div className="form-body">
                                                <form className="form-content">
                                                    <div className="field">
                                                        <input type="password" id="password" name="password" placeholder="Password" required onChange={(e)=>setEmail(e.target.value)} />
                                                        <label htmlFor="password">Your password</label>
                                                    </div>


                                                    <div className="field">
                                                        <input type="email" id="email" name="email" placeholder="youremail@gmail.com" required onChange={(e)=>setPassword(e.target.value)} />
                                                        <label htmlFor="email">Your email</label>
                                                    </div>


                                                    <div className="form-footer">
                                                        <button type="submit" className="main_btn send-btn">

                                                            <span className="btn-text">Send</span>
                                                        </button>
                                                        <br />
                                                        <a className="forgot" href="#">Forgot Password?</a>
                                                        <p className="P_tag">Don't have an account?
                                                            <a href="#">Sign Up</a>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SigningUp() {

    return (
        <>
            <div className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="main_form">
                                <div className="row">
                                    <div className="logincontain">
                                        <div className="loginimg">
                                            <div className="text_style">
                                                <h1 className="img_text">Hello, Friend!</h1>
                                                <p className="img_text">Enter your Email & Password and start journey with us</p>
                                            </div>
                                        </div>
                                        <div className="fields">
                                            <div className="titlepage">
                                                <h3>SignUp</h3>
                                            </div>
                                            <div class="container">

                                                <div className="form-body">

                                                    <form className="form-content">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div className="field">
                                                                    <input type="text" id="First Name" name="First Name" placeholder="First Name" required />
                                                                    <label htmlFor="First Name">Your name</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div className="field">
                                                                    <input type="text" id="Last Name" name="Last Name" placeholder="Last Name" required />
                                                                    <label htmlFor="Last Name">Your surname</label>
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <input type="email" id="email" name="email" placeholder="youremail@gmail.com" required />
                                                                <label htmlFor="email">Your email</label>
                                                            </div>
                                                            <div className="field">
                                                                <input type="text" id="phone" name="phone" placeholder="phone" required />
                                                                <label htmlFor="phone">Your Phone no.</label>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div className="field">
                                                                    <input type="password" id="password" name="password" placeholder="Password" required />
                                                                    <label htmlFor="password">Enter password</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div className="field">
                                                                    <input type="password" id="re-type password" name="re-type password" placeholder="Confirm Password" required />
                                                                    <label htmlFor="re-type password">Re-type password</label>
                                                                </div>
                                                            </div>
                                                            <div className="form-footer">
                                                                <button type="submit" className="main_btn send-btn">

                                                                    <span className="btn-text">Send</span>
                                                                </button>
                                                                <br />
                                                                <a className="forgot" href="#">Forgot Password?</a>
                                                                <p className="P_tag">Already have an account?
                                                                    <a href="#">Login</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 