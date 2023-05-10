import { HashRouter, Routes, Route } from "react-router-dom";
import Userhome from "./homepage";
import Login from "./login";
import Header from "./headersection";
import Service from "./services";
import ContactUS from "./contactus";
import Register from "./register";


const User = () => {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Userhome/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/services" element={<Service />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/contact" element={<ContactUS />} />
            </Routes>
        </HashRouter>
    )
}
export default User;