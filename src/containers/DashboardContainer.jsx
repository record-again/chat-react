import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";
import axios from "axios";
import ChatContainer from "./ChatContainer";
import LoadingComponent from "../components/LoadingComponent";

const DashboardContainer = () => {
  const [auth, setAuth] = useRecoilState(authenticated);
  const redirect = useNavigate();

  const getMe = async () => {
    try {
      let response = await axios.get("/me", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });

      setAuth({ login: true, user: response.data });
      return true;
    } catch (e) {
      setAuth({ login: false, user: [] });
      redirect("/login");
      return false;
    }
  };

  useEffect(() => {
    if (!auth.login) {
      getMe();
    }
  }, [auth.login]);

  return (
    <div className="container pt-5">
      {auth.login ? <ChatContainer /> : <LoadingComponent />}
    </div>
  );
};

export default DashboardContainer;
