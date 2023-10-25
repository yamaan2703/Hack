import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
import AppBtn from "../Component/AppBtn";
import Donor from "./MainPages/Donor";
import Acceptor from "./MainPages/Accept";


export default function Main({}) {

  const navigate = useNavigate();

  const param = useParams()
  let bloodData = param
  console.log(param)
  console.log(bloodData)


  
  const DonorClick = () => {
    navigate("/donor");
  };

  const AcceptorClick = () => {
    navigate(`acceptor/${param.id}`);
  };

  return (
    <>
      <div className="bg-sky-700 text-white h-screen flex justify-center items-center ">
        <div className="w-[500px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg">
          <div className="py-5 text-center">
            <h1 className="text-5xl font-medium text-white">Are You</h1>
          </div>

          <div className="text-center">
            <div className="p-2">
              <AppBtn label="Donor" onClick={DonorClick} />
            </div>
            <div className="p-2">
              <AppBtn label="Acceptor" onClick={AcceptorClick} />
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
}