import { Link } from "react-router-dom";

const Header = () => {
    return (
        <><section className="bg-primary p-2 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6">
                        <i className="fa fa-headset"></i> +91-8884166608
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6 text-end">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </section>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <i className="fa fa-search fa-lg"></i> Free Billing
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mb-2 mb-md-0">
                            <li className="nav-item ps-5">
                                <Link to="/" className="nav-link active"><i className="fa fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link to="/services" className="nav-link active"><i className="fa fa-tools"></i> Our Services</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link to="/login" className="nav-link active"><i className="fa fa-lock"></i> Login</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link to="/register" className="nav-link active"><i className="fa fa-user-plus"></i> Create Account</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link to="/contact" className="nav-link active" data-bs-toggle="modal" data-bs-target="#contact">
                                    <i className="fa fa-headset"></i> Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav></>
    )
}
export default Header;
