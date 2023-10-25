import AppInp from "../Component/AppInp";
import AppBtn from "../Component/AppBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fbLogin } from "../Config/FirebaseMethods";

export default function Login () {
    const [model, setModel] = useState({});
    const navigate = useNavigate()

    const GoSignUp = () =>{
        navigate("/SignUp")
    }

    const fillModel = (key, val) => {
      model[key] = val;
      setModel({ ...model });
    };
  
    let LoginUser = () => {
      console.log(model);
      fbLogin(model)
        .then((res) => {

          console.log(res.bloodgroup);
          // navigate(`main`)
          navigate("/main/"+res.bloodgroup)
          // navigate(`Donor`)

        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
        <>
        <div className="bg-sky-700 h-screen flex justify-center items-center">
            <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">

            <div className="py-3">
            <h1 className="text-5xl font-medium text-white text-center shadow-lg shadow-white py-3">Login</h1>
            </div>

            <div className="py-3">
               <AppInp 
               value={model.email}
               onChange={(e) => fillModel("email", e.target.value)}
               label="Email"/>
            </div>

            <div className="py-3">
               <AppInp 
               value={model.password}
               onChange={(e) => fillModel("password", e.target.value)}
               label="Password"/>
            </div>
            
            <div className="py-3">
              <AppBtn 
               onClick={LoginUser}
              label="Login"/>
            </div>

            <div className="text-white">
              <p onClick={GoSignUp}>Create An Account.</p>
            </div>
            </div>
        </div>
        </>
    )
}