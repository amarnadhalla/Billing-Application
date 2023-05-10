import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Bill = () => {
    let months=["01","02","03","04","05","06","07","08","09","10","11","12"];
    let years=["2018","2019","2020","2021","2022","2023","2024"];
    let days=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
    let[name, pickname]=useState("");
    let[mobile, pickmobile]=useState("");
    let[email, pickemail]=useState("");
    let[product, pickproduct]=useState("");
    let[cost, pickcost]=useState("");
    let[gst, pickgst]=useState("");
    let[day, pickday]=useState("01");
    let[month, pickmonth]=useState("01");
    let[year, pickyear]=useState("2018");
    let[total, picktotal]=useState("");
    let[gstnumber, pickgstnumber]=useState("")
    let[discount, pickdiscount]=useState("")

    //product list api
    let[listproduct, updateproduct]=useState([]);
    const allproduct = () =>{
        let input = {
            "key": localStorage.getItem("key")
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/allproduct", requestOptions)
        .then(response => response.json())
        .then(data =>{ 
            updateproduct(data);
        })
    }

    const handleProduct = (event) => {
        const productname = event.target.value;
        const selectedproduct=listproduct.find(product => product.productname === productname);
        pickproduct(productname);
        pickcost(selectedproduct.price);
        pickgst(selectedproduct.price * 0.18);
        picktotal(parseInt(selectedproduct.price) + parseInt(selectedproduct.price * 0.18));
      };

    const handleChangePrice=(e)=>{
        const changeprice= e.target.value;
        pickcost(changeprice);
        let changegst= changeprice * 0.18;
        pickgst(changegst);
        picktotal(parseInt(cost)+parseInt(gst));
    };

    const HandleDiscount=()=>{
        let price = (discount * cost) /100;
        let discost=cost- parseInt(price);
        pickcost(discost);
        let disgst= discost * 0.18;
        pickgst(disgst);
        picktotal(parseInt(discost) + parseInt(disgst));
    }

    const save = () => {
        let key = localStorage.getItem("key");
        if(name =="" || mobile =="" || email == ""|| cost =="" || gstnumber==""){
            Swal.fire({
                title : "Required fields cannot be empty",
                icon : "warning",
                showConfirmButton : true
            })
        }else{
        let input = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "product": product,
            "amount": cost,
            "gst": gst,
            "total": total,
            "gstno": gstnumber,
            "day": day,
            "month": month,
            "year": year,
            "discount": discount,
            "key": key
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Billing/savebill", requestOptions)
            .then(response => response.text())
            .then(data => {
                Swal.fire({
                    title: "Bill Created",
                    icon : "success",
                    timer: 2000,
                    showCancelButton: false
                })
                pickname(""); pickmobile(""); pickemail(""); pickcost(""); pickgst("");picktotal("");pickgstnumber("");pickdiscount("")
            })
        }
    }

    useEffect(()=>{
        allproduct();
    })

    return (
        <section className=" pt-5 pb-5">
            <div className=" container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <h3 className="text-primary text-center">New Billing</h3>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-3">
                        <label> Full Name<span>*</span></label>
                        <input type="text" className="form-control" onChange={obj=>pickname(obj.target.value)} value={name} />
                    </div>
                    <div className="col-lg-3">
                        <label> Mobile<span>*</span> </label>
                        <input type="number" className="form-control" onChange={obj=>pickmobile(obj.target.value)} value={mobile} />
                    </div>
                    <div className="col-lg-3">
                        <label> Email<span>*</span></label>
                        <input type="text" className="form-control" onChange={obj=>pickemail(obj.target.value)} value={email}/>
                    </div>
                    <div className="col-lg-3">
                        <label> Product<span>*</span></label>
                        <select className="form-select" onChange={handleProduct}>
                        <option readOnly>Select Product</option>
                            {
                                listproduct.map((item, index)=>{
                                    return(
                                    <option key={index} value={item.productname}>{item.productname}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-3">
                        <label> Total Cost </label>
                        <input type="text" className="form-control" value={cost} onChange={handleChangePrice}/>
                    </div>
                    <div className="col-lg-3">
                        <label> GST Amount </label>
                        <input type="number" className="form-control" value={gst} readOnly/>
                    </div>
                    <div className="col-lg-2">
                        <label> Day</label>
                        <select type="number" className="form-select" onChange={obj=>pickday(obj.target.value)}>
                            {
                                days.map((day, index)=>{
                                    return(
                                        <option key={index}>{day}</option>
                                    )
                                })
                            }
                        </select>   
                    </div>
                    <div className="col-lg-2">
                        <label> Month</label>
                        <select type="number" className="form-select" onChange={obj=>pickmonth(obj.target.value)}>
                            {
                                months.map((month, index)=>{
                                    return(
                                        <option key={index}>{month}</option>
                                    )
                                })
                            }
                        </select>   
                    </div>
                    <div className="col-lg-2">
                        <label> Year</label>
                        <select type="number" className="form-select" onChange={obj=>pickyear(obj.target.value)}>
                            {
                                 years.map((years, index)=>{
                                    return(
                                        <option key={index}>{years}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-3">
                        <label> Total Amount </label>
                        <input type="text" className="form-control" value={total} readOnly/>
                    </div>
                    <div className="col-lg-4">
                        <label> GST Number<span>*</span></label>
                        <input type="text" className="form-control" onChange={obj=>pickgstnumber(obj.target.value)} value={gstnumber}/>
                    </div>
                    <div className="col-lg-1">
                        <label> Discount </label>
                        <input type="number" className="form-control" placeholder="%" onChange={obj=>pickdiscount(obj.target.value)} value={discount} />
                    </div>
                    <div className="col-lg-2 mt-4">
                        <button className="btn btn-success" onClick={HandleDiscount}>Apply</button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary btn-sm" onClick={save}>Submit</button>
            </div>
        </section>
    )
}
export default Bill;
