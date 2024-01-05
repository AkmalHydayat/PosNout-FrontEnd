/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import NavTop from "./NavTop";
import ButtonSide from "../components/ButtonSide";
import Sidebar from "./Sidebar";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import AlertShow from "../components/ui/Alert";

const LayoutPage = ({ children }) => {
  const [
    iconToggle,
    sideWidth,
    widthUserImg,
    inlineHiden,
    contentWidth,
    fontSize,
    textCenter,
    fontSize6xl,
    mSDrop,
    me4,
    sideActive,
    rounded,
    w45,
    pb,
    ps,
    hidenBlock,
    delay,
  ] = ButtonSide();

  const [username, SetUsername] = useState("");
  const [url, setUrl] = useState("");
  const [expire, setExpire] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
      setId(decoded.userId);
      SetUsername(decoded.username);
      setUrl(decoded.url);
      setEmail(decoded.email);
      setRole(decoded.role);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        AlertMessage("Silahkan Login Terlebih Dahulu!", 370, "warning");
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:3000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        const decoded = jwtDecode(response.data.accessToken);
        SetUsername(decoded.username);
        setUrl(decoded.url);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <React.Fragment>
      <div
        className={`${sideWidth} border-[1px] border-gray-300 dark:border-colorDarkTwo  transition-all ease-in bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black shadow-sm2 shadow-black/20 h-screen fixed`}
      >
        <Sidebar
          iconToggle={iconToggle}
          sideWidth={sideWidth}
          widthUserImg={widthUserImg}
          inlineHiden={inlineHiden}
          fontSize={fontSize}
          textCenter={textCenter}
          fontSize6xl={fontSize6xl}
          mSDrop={mSDrop}
          me4={me4}
          sideActive={sideActive}
          rounded={rounded}
          w45={w45}
          pb={pb}
          hidenBlock={hidenBlock}
          delay={delay}
          username={username}
          url={url}
        />
        <div>{iconToggle}</div>
      </div>
      <div className="">
        <main className={`${contentWidth} ${ps} transition-all ease-in`}>
          {/* NavTop */}
          <NavTop
            username={username}
            url={url}
            id={id}
            email={email}
            role={role}
            refreshToken={refreshToken}
          />

          {/* Page */}
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default LayoutPage;
