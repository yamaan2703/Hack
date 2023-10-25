import { useNavigate } from "react-router-dom";
import AppBtn from "../Component/AppBtn";


export default function Home() {
  const navigate = useNavigate();

  const SignClick = () => {
    navigate("SignUp");
  };

  const LoginClick = () => {
    navigate("Login");
  };

  return (
    <>
      <div className="bg-sky-700 text-white h-screen flex justify-center items-center ">
        <div className="w-[500px] bg-[rgba(255,255,255,0.19)] p-10 rounded-lg">
          <div className="py-5 text-center">
            <h1 className="text-5xl font-medium text-white shadow-lg py-2 shadow-white">Blood Bank</h1>
          </div>

          <div className="text-center">
            <div className="p-2">
              <AppBtn label="SignUp" onClick={SignClick} />
            </div>
            <div className="p-2">
              <AppBtn label="Login" onClick={LoginClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}