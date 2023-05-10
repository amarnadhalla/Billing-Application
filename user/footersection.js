const Footer = () => {
    return (
        <div>
            <footer className="bg-dark p-5 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <h4> About Us </h4>
                            <p>
                                dfg dfg dfg dfg fg dfg dfgdfg dfg dfg dfg dfgdfg dfg dfg dfgd fgdfg dfg dfg df
                                dfg dfg dfg dfg fg dfg dfgdfg dfg dfg dfg dfgdfg dfg dfg dfgd fgdfg dfg dfg df
                                dfg dfg dfg dfg fg dfg dfgdfg dfg dfg dfg dfgdfg dfg dfg dfgd fgdfg dfg dfg df
                            </p>
                        </div>
                        {/*4end*/}

                        <div className="col-4">
                            <h4> Office Address </h4>
                            <p> Firstenquiry Digital Media </p>
                            <p> #123, ORR, Marathahalli </p>
                            <p> Bangalore 560037 </p>
                            <p> Contact - 8884166608 </p>
                            {/*4end*/}
                        </div>
                        <div className="col-4">
                            <h4> In Social Media </h4>
                            <p> <i className="fab fa-facebook fa-2x"></i> Follow in Facebook </p>
                            <p> <i className="fab fa-linkedin fa-2x"></i> Follow in Linkedin </p>
                            <p> <i className="fab fa-twitter fa-2x"></i> Follow in Twitter </p>
                            <p> <i className="fab fa-instagram fa-2x"></i> Follow in Instagram </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/*modal start*/}
            <div className="modal fade" id="contact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">

                        <div className="modal-header bg-info text-white p-3">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Send Your Message</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label>Enter Your Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Enter Mobile No</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Enter e-Mail Id</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Enter Message</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="modal-footer justify-content-center">
                            <button type="button" className="btn btn-info">Send Request <i className="fa fa-arrow-right"></i></button>
                        </div>

                    </div>
                </div>
            </div>
            {/*modal end*/}
        </div>
    )
}
export default Footer;