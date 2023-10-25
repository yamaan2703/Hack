import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fbAuth } from "../Config/FirebaseMethods";



export default function Protected(props) {
  const { Screen } = props;
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();

  let checkAuth = () => {
    setLoader(true);

    fbAuth()
      .then((res) => {
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        navigate("/");
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return loader ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <Screen />
  );
}