import "./signin.css"

export default function SigningIn() {

    return (
        <>
            <div className="user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h3>Login</h3>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="fields">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input className="form-control myForm" placeholder="Your Email" type="email" name="Email" pattern="[^ @]*@[^ @]*" required />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <input className="form-control myForm" placeholder="Password" type="password" name="Password" required />
                                        </div>
                                        {/* <a className="forgot" href="#">Forgot Password</a> */}
                                        <div className=" col-md-12">
                                            <button className="send">Login</button>
                                        </div>
                                        <br />
                                        <p>Don't have an account? 
                                            <a href="#">Sign Up</a>
                                        </p>
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
                            <div className="titlepage">
                                <h3>Sign Up</h3>
                            </div>
                            <form className="main_form">
                                <div className="row">
                                    <div className="fields">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}