import React, { useState } from "react";
import AppInp from "../../Component/AppInp";
import { InstituteAdd } from "../../Config/FirebaseMethods";
import AppBtn from "../../Component/AppBtn";

export default function Donor() {
  const [donorForm, setDonorForm] = useState({
    name: "",
    fname: "",
    contact: "",
    email: "",
    address: "",
    gender: "Male", // Set a default value
    bloodgroup: "",
  });

  const AddInstituteForm = () => {
    InstituteAdd("Donor Form", donorForm)
      .then(() => {
        console.log("Data Sent");

        setDonorForm({
          name: "",
          fname: "",
          contact: "",
          email: "",
          address: "",
          gender: "Male", // Reset gender to the default value
          bloodgroup: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDonorForm({
      ...donorForm,
      [name]: value,
    });
  };

  const bloodGroup = ["Group O", "Group A", "Group B", "Group AB"];

  return (
    <>
      <div className="h-screen bg-sky-700 flex justify-center items-center">
        <div className="w-[800px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg text-center">
          <div className="text-4xl text-white font-medium shadow-lg shadow-white text-center py-2">
            <h1>Donor Registration Form</h1>
          </div>

          <div className="form py-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <AppInp
                  name="name"
                  value={donorForm.name}
                  onChange={handleInputChange}
                  label="Enter Your Name"
                />
              </div>

              <div className="">
                <AppInp
                  name="fname"
                  value={donorForm.fname}
                  onChange={handleInputChange}
                  label="Father Name"
                />
              </div>

              <div className="">
                <AppInp
                  name="contact"
                  value={donorForm.contact}
                  onChange={handleInputChange}
                  label="Contact Number"
                />
              </div>

              <div className="">
                <AppInp
                  name="email"
                  value={donorForm.email}
                  onChange={handleInputChange}
                  label="Email"
                />
              </div>

              <div className="">
                <AppInp
                  name="address"
                  value={donorForm.address}
                  onChange={handleInputChange}
                  label="Address"
                />
              </div>

              <div className="radio-button-container border p-2 flex items-center justify-evenly text-white font-bold">
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    checked={donorForm.gender === "Male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    checked={donorForm.gender === "Female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>

              <div className="text-center">
                <select name="bloodgroup" onChange={handleInputChange}
                 className="bg-sky-900 text-white p-2">
                  <option value="">Select Blood Group</option>
                  {bloodGroup.map((x, i) => {
                    return (
                      <option key={i} value={x}>
                        {x}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="pt-5">
                <AppBtn label="Submit" onClick={AddInstituteForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


   {/* <div className="">
                <AppInp
                  name="gender"
                  value={donorForm.gender}
                  onChange={handleInputChange}
                  label="Gender"
                />
              </div> */}

              {/* <AppRadio 
              name="gender"
              value={donorForm.gender}
              onChange={handleInputChange}
              /> */}