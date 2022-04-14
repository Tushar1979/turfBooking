import soccer from "../images/login/soccer.webp"

export default function SigningIn() {

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
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                {/* <label className="inputlable">Email</label> */}
                                                <input className="form-control myForm" placeholder="Your Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                {/* <label className="inputlable">Password</label> */}
                                                <input className="form-control myForm" placeholder="Password" type="password" name="Password" required />
                                            </div>

                                            <div className=" col-md-12">
                                                <button className="send">Login</button>
                                            </div>
                                            <br />
                                            <a className="forgot" href="#">Forgot Password?</a>
                                            <p>Don't have an account?
                                                <a href="#">Sign Up</a>
                                            </p>
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
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="form-control myForm" placeholder="First Name" type="text" name="First Name" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="form-control myForm" placeholder="Last Name" type="text" name="Last Name" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="form-control myForm" placeholder="Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" />
                                            </div>
                                            <div className=" col-md-6">
                                                <input className="form-control myForm" placeholder="Phone No." type="number" name="Phone" min={0}
                                                    onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                                                    maxLength={10} required />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="form-control myForm" placeholder="Password" type="password" name="Password" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="form-control myForm" placeholder="Confirm Password" type="password" name="Confirm Password" />
                                            </div>
                                            <div className=" col-md-12">
                                                <button className="send">Submit</button>
                                            </div>
                                            <br />
                                            <p>Already have an account?
                                                <a href="#">Login</a>
                                            </p>
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
