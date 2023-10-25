import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";


import Acceptor from "../Pages/MainPages/Accept";
// import Donor from "../Pages/MainPages/Donor";
import Protected from "../Pages/Protected";
import Main2 from "../Pages/Main";
import Donor from "../Pages/MainPages/Donor";
import Main from "../Pages/Main";

export default function AppRouter () {
    return (
        <>
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="signup" element={<SignUp />} />
           <Route path="login" element={<Login />} />
          {/* < Route path="Donor" element={<Donor/>}/> */}
           <Route path="main/:id" element={<Main />} />
            <Route path="donor" element={<Protected Screen={Donor} />} />
           <Route path="acceptor/:id" element={<Protected Screen={Acceptor} />} /> 
        </Routes>
        </BrowserRouter>
        </>
    )
}