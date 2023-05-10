import {Link} from 'react-router-dom';

const Header=()=>{
  let name =localStorage.getItem("name");
    return(
        <nav className="navbar navbar-expand-lg  bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-white">My Billing</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-row justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ps-4">
                <Link to="/" className="nav-link text-white" aria-current="page"><i className="fa fa-home fa-sm"></i> Home</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/enquiry" className="nav-link text-white"><i className="fa fa-headset "></i> Enquiry</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/bill" className="nav-link text-white"><i className="fa fa-plus fa-sm"></i> New registration</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/managebill" className="nav-link text-white"><i className="fa fa-table fa-sm"></i> Manage Bill</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/manageproduct" className="nav-link text-white"><i className="fa fa-list-check fa-sm"></i> Manage Product</Link>
              </li>
              <li className="nav-item ps-4">
                <Link to="/edit" className="nav-link text-white"><i className="fa fa-edit fa-sm"></i> {name}</Link>
              </li>
              <li className="nav-item ps-4">
                <Link className="nav-link text-danger" onClick={logout}><i className='fa fa-sign-out fa-sm'></i> Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Header;

const logout=()=>{
  localStorage.clear();
  window.location.href="/";
}
