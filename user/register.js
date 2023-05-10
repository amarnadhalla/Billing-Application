import Swal from "sweetalert2";
import Footer from "./footersection";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    let[firstname, pickfirstname]=useState("");
    let[lastname, picklastname]=useState("");
    let[email, pickemail]=useState("");
    let[password, pickpassword]=useState("");
    let[cpassword, pickcpassword]=useState(""); 
    let[mobile, pickmobile]=useState("");
    let[address, pickaddress]=useState("");

    let save=()=>{
        if(firstname == "" || lastname == "" || email == "" || password == "" || cpassword == "" || mobile == "" || address == ""){
            alert("Required fields cannot be empty");
        }
        else if(password !== cpassword){
            alert("password not matched tryagain...!");
        }else{
        let input = {
            "fname": firstname,
            "lname": lastname,
            "email": email,
            "password": password,
            "cpassword": cpassword,
            "mobile": mobile,
            "address": address
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/billing/register", requestOptions)
            .then(response => response.text())
            .then(data => {
                Swal.fire({
                    title: "Registred",
                    icon : "success",
                    timer: 2000,
                    showCancelButton: false
                })
            })
        }
    }
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row mb-3">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-info">
                            <i className="fa fa-user-plus"></i> Create New Account
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card border-0 shadow-lg">
                            <div className="card-header"> Enter Your Details </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="mb-3 col-lg-6">
                                        <label>First Name<span>*</span></label>
                                        <input type="text" className="form-control" onChange={obj=>pickfirstname(obj.target.value)}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name<span>*</span></label>
                                        <input type="text" className="form-control" onChange={obj=>picklastname(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-6">
                                        <label>e-Mail id<span>*</span></label>
                                        <input type="email" className="form-control" onChange={obj=>pickemail(obj.target.value)} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Mobile Number<span>*</span></label>
                                        <input type="number" className="form-control"  onChange={obj=>pickmobile(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-6">
                                        <label>Password<span>*</span></label>
                                        <input type="password" className="form-control" onChange={obj=>pickpassword(obj.target.value)}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Confirm Password<span>*</span></label>
                                        <input type="password" className="form-control" onChange={obj=>pickcpassword(obj.target.value)}/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Address<span>*</span></label>
                                    <textarea height="15" className="form-control" onChange={obj=>pickaddress(obj.target.value)}></textarea>
                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <button className="btn btn-info" onClick={save}> Register </button>
                                <div className="text-center">
                                    <p><small>Already had an account?</small>
                                    <Link to="/login"> <small> Login</small></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Register;