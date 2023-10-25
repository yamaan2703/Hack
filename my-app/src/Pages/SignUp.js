import { useNavigate } from "react-router-dom";
import AppBtn from "../Component/AppBtn";
import AppInp from "../Component/AppInp";

import { useState } from "react";
import { fbSignUp } from "../Config/FirebaseMethods";
import Dropdown from "../Component/Dropdown";

export default function SignUp() {
  const navigate = useNavigate();

  const [model, setModel] = useState({});

    const fillModel = (key, val) => {
      model[key] = val;
      setModel({ ...model });
    };

  const GoLogin = () => {
    navigate("/Login");
  };

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const bloodGroup = ["Group O", "Group A", "Group B", "Group AB"]
  return (
    <>
      <div className="bg-sky-700 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-3 text-center">
            <h1 className="text-5xl font-medium text-white shadow-lg shadow-white py-4 px-1">Sign Up</h1>
          </div>

          <div className="py-3">
            <AppInp
              value={model.userName}
              onChange={(e) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>

          <div className="py-3">
            <AppInp
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>

          <div className="py-3">
            <AppInp
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>

          <div className="py-3">
            <select
              className="bg-sky-900 text-white py-2 outline-none px-2"
              name="Blood group"
              value={model.bloodGroup}
              id=""
              onChange={(e) => fillModel("bloodgroup", e.target.value)}
            >
                  <option value="">Select Blood Group</option>

              {bloodGroup.map((x, i) => {
                return <option value={x}>{x}</option>;
              })}
            </select>
          </div>

          <div className="py-3">
            <AppBtn onClick={signUpUser} label="SignUp" />
          </div>
          <div className="text-white">
            <p onClick={GoLogin}>You have an already Account.</p>
          </div>
        </div>
      </div>
    </>
  );
}
