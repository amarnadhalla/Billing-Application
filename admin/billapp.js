import Header from "./header";
import Billhome from "./home";
import Bill from "./bill";
import ManageBill from "./managebill";
import EditProfile from "./editprofile";
import ManageProduct from "./manageproduct";
import {HashRouter, Routes, Route} from 'react-router-dom';

const Mybill=()=>{
    return(
        <HashRouter>
            <Header/>
                <Routes>
                    <Route exact path="/" element={<Billhome/>}/>
                    <Route exact path="/bill" element={<Bill/>}/>
                    <Route exact path="/managebill" element={<ManageBill/>}/>
                    <Route exact path="/edit" element={<EditProfile/>}/>
                    <Route exact path="/manageproduct" element={<ManageProduct/>}/>
                </Routes>
        </HashRouter>
    )
}
export default Mybill;