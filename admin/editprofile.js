import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditProfile = () => {

    let[business, updatebusiness]=useState([]);
    const allservice = () =>{
        let input = {
            "key": localStorage.getItem("key")
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
        .then(response => response.json())
        .then(data =>{            
            updatebusiness(data);
        })
        
        }

    let [data, updatedata] = useState([]);

    let [company, updatecompany] = useState("");
    let [email, updateemail] = useState("");
    let [mobile, updatemobile] = useState("");
    let [city, updatecity] = useState("");
    let [address, updateaddress] = useState("");
    let [contactperson, updatecontactperson] = useState("");
    let [phone, updatephone] = useState("");
    let [website, updatewebsite] = useState("");
    let [profile, updateprofile] = useState("");
    let [businesstype, updatebusinesstype] = useState("");
    let [password, updatepassword] = useState("");

    const getProfile = () => {
        let key = localStorage.getItem("key")
        let input = {
            "key": key
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Billing/editprofile", requestOptions)
            .then(response => response.json())
            .then(data => {
                updatedata(data);
                console.log(data);
                updatecompany(data.company);
                updateemail(data.email);
                updatemobile(data.mobile);
                updatecity(data.city);
                updateaddress(data.address);
                updatecontactperson(data.contactperson);
                updatephone(data.phone);
                updatewebsite(data.website);
                updateprofile(data.profile);
                updatebusinesstype(data.businesstype);
                updatepassword(data.password);
            })
    }

    const UpdateData = () => {
        let input = {
            "key": localStorage.getItem("key"),
            "company": company,
            "email": email,
            "mobile": mobile,
            "city": city,
            "address": address,
            "contactperson": contactperson,
            "phone": phone,
            "website": website,
            "profile": profile,
            "businesstype": businesstype,
            "password": password
        };
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
                const requestOptions = {
                    method: 'POST',
                    header: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(input)
                };
                fetch("https://www.campusinterview.in/webapi/billing/updateprofile", requestOptions)
                    .then(response => response.text())
                    .then(data => {
                        getProfile();
                    })
            }
            else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
              }
        })
    }
    useEffect(() => {
        getProfile();
        allservice();
    }, [1])

    

    return (
        <div className="mt-4 mb-4">
            <h4 className="text-center text-primary">Edit Profile</h4>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-lg">
                            <div className="card-header"> Edit your details </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="mb-3 col-lg-3">
                                        <label>Company</label>
                                        <input type="text" className="form-control" value={company} onChange={obj => updatecompany(obj.target.value)} />
                                    </div>
                                    <div className="mb-3 col-lg-3">
                                        <label>E-mail</label>
                                        <input type="email" className="form-control" value={email} onChange={obj => updateemail(obj.target.value)} />
                                    </div>
                                    <div className="mb-3 col-lg-3">
                                        <label>Mobile</label>
                                        <input type="number" className="form-control" value={mobile} onChange={obj => updatemobile(obj.target.value)} />
                                    </div>
                                    <div className="mb-3 col-lg-3">
                                        <label>City</label>
                                        <input type="text" className="form-control" value={city} onChange={obj => updatecity(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-3">
                                        <label>contact person</label>
                                        <input type="text" className="form-control" value={contactperson} onChange={obj => updatecontactperson(obj.target.value)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label>Phone</label>
                                        <input type="number" className="form-control" value={phone} onChange={obj => updatephone(obj.target.value)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label>WebSite</label>
                                        <input type="text" className="form-control" value={website} onChange={obj => updatewebsite(obj.target.value)} />
                                    </div>
                                    <div className="col-lg-3">
                                        <label>Profile</label>
                                        <input type="text" className="form-control" value={profile} onChange={obj => updateprofile(obj.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-lg-3">
                                        <label>Business</label>
                                        <select className="form-select" value={businesstype} onChange={obj=>updatebusinesstype(obj.target.value)}>
                                        {
                                                business.map((name, index)=>{
                                                return(
                                                <option key={index}>{name.servicename}</option>
                                                )
                                            })
                                        }
                                        </select>
                                    </div>
                                    <div className="col-lg-3">
                                        <label>Password</label>
                                        <input type="text" className="form-control" value={password} onChange={obj => updatepassword(obj.target.value)} />
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Address</label>
                                        <textarea className="form-control" value={address} onChange={obj => updateaddress(obj.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <button className="btn btn-info" onClick={UpdateData}> Update </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

            </div>
        </div>
    )
}
export default EditProfile;