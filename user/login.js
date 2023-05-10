import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footersection";

const Login = () => {
    let [email, updateemail] = useState("");
    let [password, updatepassword] = useState("")

    // error messages
    let[errmsg, updatemsg]=useState("");
    let[errpsd, updateerrpsd]=useState("");
    let[err, updateerr]=useState("");

    let goLogin = () => {
        if (email == ""){
            updatemsg("Required*");
        } 
        if(password == ""){
            updateerrpsd("Required*")
        }
            else {
            let input = {
                "email": email,
                "password": password
            };

            const requestOptions = {
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                body: JSON.stringify(input)
            };
            fetch("https://www.campusinterview.in/webapi/Login/logincheck", requestOptions)
                .then(response => response.json())
                .then(responseArray => {
                    if (responseArray.status == "SUCCESS") {
                        localStorage.setItem("key", responseArray.key);
                        localStorage.setItem("name", responseArray.name);
                        window.location.href="/";
                    } else {
                        updateerr("Invalid Email or Password")
                    }
                })
        }
    }
    return (
        <div>
            <section className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-info">
                            <i className="fa fa-lock"></i> Login
                        </h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                        <div className="card border-0 shadow-lg">
                            <div className="card-header bg-primary-subtle text-dark"> Please Login </div>

                            <div className="card-body">
                                <p className="text-center text-danger">{err}</p>
                                <div className="mb-3">
                                    <label>Email Id<span>*</span></label>
                                    <input type="email" className="form-control" onChange={obj => updateemail(obj.target.value)}/>
                                    <p className="text-danger">{errmsg}</p>
                                </div>
                                <div className="mb-3">
                                    <label>Password<span>*</span></label>
                                    <input type="password" className="form-control" onChange={obj => updatepassword(obj.target.value)} />
                                    <p className="text-danger">{errpsd}</p>
                                </div>
                            </div>{/*card body end*/}

                            <div className="card-footer text-center bg-primary-subtle">
                                <button className="btn btn-info" onClick={goLogin}> Login </button>
                                <div className="text-center">
                                    <p><small>Not a member?</small>
                                    <Link to="/register"><small> register</small></Link></p>
                            </div>
                            </div>
                        </div>{/*card end*/}
                    </div>{/*6end*/}
                    <div className="col-lg-4"></div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Login;