import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProduct=()=>{

//save product
    let[productname, pickproductname]=useState("");
    let[price, pickprice]=useState("");
    let[qty, pickqty]=useState("");

    let[errprd, updateprd]=useState("");
    let[errprice, updateprice]=useState("");
    let[errqty, updateqty]=useState("");

    const saveproduct = () =>{
        if(productname==""){
            updateprd("Required*")
        }
        if(price == ""){
            updateprice("Required*")
        }
        if(qty == ""){
            updateqty("Required*")
        }
        else{
        let input = {
            "key": localStorage.getItem("key"),
            "productname": productname,
            "price": price,
            "qty": qty
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/saveproduct", requestOptions)
        .then(response => response.text())
        .then(productarray =>{ 
            Swal.fire({
                title : "Product Added successfully",
                icon : "success",
                timer : 3000,
                showConfirmButton : false
            })
            allproduct();
            pickproductname(""); pickprice(""); pickqty("")           
        })
    }
    }

// list product
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
            console.log(data);
        })
    }

    useEffect(()=>{
        allproduct();
    },[1])

    return(
        <div className="mt-4 mb-4">
            <h3 className="text-primary text-center">Manage Product</h3>
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-lg-3">
                        <h4 className="text-center text-info mt-4 mb-3">Add Product</h4>
                        <div className="mb-3">
                        <label>Product Name<span>*</span></label>
                        <input type="text" className="form-control" onChange={obj=>pickproductname(obj.target.value)} value={productname}/>
                        <p className="text-danger">{errprd}</p>
                        </div>
                        <div className="mb-3">
                        <label>Price<span>*</span></label>
                        <input type="text" className="form-control" onChange={obj=>pickprice(obj.target.value)} value={price}/>
                        <p className="text-danger">{errprice}</p>
                        </div>
                        <div className="mb-3">
                        <label>Quantity<span>*</span></label>
                        <input type="number" className="form-control" onChange={obj=>pickqty(obj.target.value)} value={qty}/>
                        <p className="text-danger">{errqty}</p>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={saveproduct}>Add Product</button>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                        <h4 className="text-center text-success mb-4 mt-4">Product List</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>P.id</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    listproduct.map((item, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.pid}</td>
                                                <td>{item.productname}</td>
                                                <td>{item.price}</td>
                                                <td>{item.qty}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageProduct;