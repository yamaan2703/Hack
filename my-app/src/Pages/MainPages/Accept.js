import { useEffect, useState } from "react";
import AppBtn from "../../Component/AppBtn";
import AppTable from "../../Component/AppTable";
import { InstituteGet } from "../../Config/FirebaseMethods";
import { useNavigate, useParams } from "react-router-dom";

export default function Acceptor() {
  const [donorData, setDonorData] = useState([]);
  const [instituteData, setInstituteData] = useState([]);

  useEffect(() => {
    // Fetch donor data from your Firebase method (InstituteGet)
    InstituteGet('Donor Form')
      .then((data) => {
        const donorArray = Object.values(data);
        setDonorData(donorArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Fetch institute data from your Firebase method (InstituteGet)
    InstituteGet('user')
      .then((data) => {
        const instituteArray = Object.values(data);
        setInstituteData(instituteArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const column = [
    { heading: 'Name', value: 'name' },
    { heading: 'Contact', value: 'contact' },
    { heading: 'Gender', value: 'gender' },
    { heading: 'Blood', value: 'bloodgroup' },
  ];

  const navigate = useNavigate();

  const GoToDonate = () => {
    navigate("/donor");
  };

  const GoToLogout = () => {
    navigate("/");
  };

  const param = useParams();
  console.log(param.id)
  let bloodData;

  if (param.id === "Group A") {
    bloodData = donorData.filter((obj) => obj.bloodgroup === "Group A" || obj.bloodgroup === "Group AB");
  } else if (param.id === "Group B") {
    bloodData = donorData.filter((obj) => obj.bloodgroup === "Group B" || obj.bloodgroup === "Group AB");
  }

  console.log(bloodData);
  console.log(param.id);
  console.log(donorData);

  return (
    <div className="h-screen bg-sky-700 flex justify-center items-center">
      <div className="w-[1000px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg text-center">
        <div className="text-5xl text-white font-bold shadow-lg py-2 shadow-white">
          <h1>Blood Bank</h1>
        </div>

        <div className="text-end my-5">
          <AppBtn onClick={GoToDonate} label="Donate" />
        </div>

        <div className="flex justify-center">
          <AppTable data={bloodData} column={column} />
        </div>
        
        <p>Group: {param.id}</p>

        <div className="my-5">
          <AppBtn onClick={GoToLogout} label="Logout" />
        </div>
      </div>
    </div>
  );
}












