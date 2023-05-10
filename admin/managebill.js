import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PdfDownload from "./pdfdownload";

const ManageBill = () => {
    let total=0;
    let totalgst=0;
    let grandtotal=0;

    let [billdata, updatebill] = useState([]);
    const getBilling = () => {
        let key=localStorage.getItem("key")// getting key from the local storage
        let input = {
            "key": key
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Billing/getmybill", requestOptions)
            .then(response => response.json())
            .then(data => {
                updatebill(data);
            })

    }

    useEffect(() => {
        getBilling();
    }, [1])

    let [keyword, updatekeyword] = useState("");
    let [entriesvalue, updateentries]=useState("5")

    const PER_PAGE = parseInt(entriesvalue);
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(billdata.length / PER_PAGE);

    billdata.map((data, index) => {
        total = total + parseInt(data.amount)
        totalgst = totalgst + parseInt(data.gst)
        grandtotal = grandtotal + parseInt(data.total)
    })

    return (
        <div className="container">
            <div className="m-4">
                <h3 className="text-primary">Manage Bill</h3>
                <div>
                    <ul id="list">
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2018-2019</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2019-2020</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2020-2021</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2021-2022</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2022-2023</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2023-2024</a></button></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                Show<p className="col-lg-1">
                    <select className="form-select" onChange={obj=>updateentries(obj.target.value)}>
                        <option defaultValue>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </p>entries
                <div className="col-lg-7"></div>
                Search:<p className="col-lg-2">
                    <input type="text" className="form-control" onChange={obj => updatekeyword(obj.target.value)} />
                </p>
            </div>

            <div>
                <table className="table table-bordered border-bottom-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Fee</th>
                            <th>GST</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            billdata.filter((post => {
                                if (post.name.toLowerCase().includes(keyword.toLowerCase()) ||
                                    post.mobile.includes(keyword) ||
                                    post.email.includes(keyword) ||
                                    post.product.toLowerCase().includes(keyword.toLowerCase())) {
                                    return post;
                                }
                            }))
                                .slice(offset, offset + PER_PAGE)
                                .map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.mobile}</td>
                                            <td>{data.email}</td>
                                            <td>{data.product}</td>
                                            <td>{data.amount}</td>
                                            <td>{data.gst}</td>
                                            <td>{data.total}</td>
                                            <td>{data.day}/{data.month}/{data.year}</td>
                                            <td className="text-center"><PdfDownload data={data}/></td>
                                        </tr>
                                    )
                                })
                        }

                    </tbody>
                </table>
                <div className="row">
                    <div className="col-lg-3">
                        <p>Showing 1 to {PER_PAGE} of {billdata.length} entries</p>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-1">
                        <div className="mb-4 mt-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                pageCount={pageCount}
                                marginPagesDisplayed={0 - 1}
                                pageRangeDisplayed={0 - 1}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination justify-content-center"}
                                pageClassName={"page-item "}
                                pageLinkClassName={"page-link"}
                                previousClassName={"page-item"}
                                previousLinkClassName={"page-link"}
                                nextClassName={"page-item"}
                                nextLinkClassName={"page-link"}
                                breakClassName={"page-item"}
                                breakLinkClassName={"page-link"}
                                activeClassName={"active primary"}
                            />
                        </div>
                    </div><hr />
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <p className="text-primary"><strong>Total: <i className="fa fa-inr fa-sm"></i> {total}</strong></p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2">
                        <p className="text-info"><strong>Total GST: <i className="fa fa-inr fa-sm"></i> {totalgst}</strong></p>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2">
                        <p className="text-success"><strong>Grand Total: <i className="fa fa-inr fa-sm"></i> {grandtotal}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageBill;