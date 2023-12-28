/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BiCamera } from "react-icons/bi";
import { PiUserThin } from "react-icons/pi";
import AlertShow from "../components/ui/Alert";
import axios from "axios";

const BodyModalSetting = ({
  children,
  isVisible,
  onClose,
  edit,
  setEdit,
  url,
  refreshToken,
  setPassword,
  setConfPassword,
  id,
}) => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
    setShowPreview(true);
  };

  const updateProfileImage = async () => {
    try {
      await axios.put(
        `http://localhost:3000/usersImg/${id}`,
        {
          file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      refreshToken();
      setShowPreview(false);
      setPreview("");
      setFile("");
      AlertMessage("Berhasil Mengupdate Foto Profile", 380, "success");
      setEdit(false);
    } catch (error) {
      if (error.response) {
        AlertMessage(error.response.data.msg, 470, "error");
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "visible bg-black/30" : "invisible"
      } flex pt-28 justify-center space-x-7 z-40 backdrop-blur-sm transition-colors cursor-default font-pt_Sans`}
      id="wrapper"
    >
      {/* user image profile */}
      <div
        className={`w-[230px] h-[230px] p-5  ${
          isVisible
            ? "scale-100 opacity-100 delay-150 duration-300"
            : "scale-75 opacity-0 delay-0 duration-75"
        } ${
          edit ? "-translate-y-16 delay-0" : ""
        } relative text-lg transition-all ease-in font-semibold bg-colorTwo dark:bg-colorDarkTwo rounded-md`}
      >
        <div className="p-1">
          <div className="relative w-full flex  justify-center items-center rounded-full bg-gray-200 dark:bg-colorDarkOne/40 text-gray-900 dark:text-colorTwo">
            <label className="absolute right-3 bottom-2 ">
              {" "}
              <span>
                <BiCamera className="bg-colorTwo hover:bg-gray-300 dark:hover:bg-colorDarkOne cursor-pointer w-7 h-7 dark:bg-colorDarkTwo text-gray-900 dark:text-colorTwo rounded-full p-1" />
              </span>
              <span>
                <input type="file" className="hidden" onChange={loadImage} />
              </span>
            </label>
            {url ? (
              <img src={url} alt="" className={`rounded-full object-cover`} />
            ) : (
              <PiUserThin className={`h-full w-full p-3`} />
            )}
          </div>
        </div>
      </div>

      {/* modal edit profile */}
      <div
        className={`${
          isVisible
            ? "scale-100 opacity-100 delay-150 duration-300"
            : "scale-75 opacity-0 delay-0 duration-75"
        } w-[400px] h-fit relative ${
          edit ? "-translate-y-16 delay-0" : ""
        } text-lg transition-all ease-in font-semibold bg-colorTwo dark:bg-colorDarkTwo rounded-md`}
      >
        {/* Button Close Modal */}
        <button
          type="button"
          className={`text-colorTwo ${
            isVisible
              ? "scale-100 opacity-100  duration-300"
              : "scale-75 opacity-0"
          } absolute z-20 -end-3 -top-3  bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2  hover:shadow-black/40 shadow-black/20  `}
          onClick={() => {
            onClose();
            setEdit(false);
            refreshToken();
            setPassword("");
            setConfPassword("");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="">{children}</div>
      </div>
      <div className="block">
        <div
          className={`${
            showPreview ? "visible opacity-100 z-50" : "invisible opacity-0 z-0"
          }  transition-all ease-in-out absolute inset-0   w-full py-10 bg-black/80 backdrop-blur-sm duration-300`}
        >
          <figure className="flex justify-center">
            <img
              src={preview}
              alt=""
              className="rounded-full object-cover w-[500px] h-[500px]"
            />
          </figure>
          <div className="flex justify-center mt-5 space-x-5">
            {" "}
            <button
              type="button"
              onClick={() => {
                updateProfileImage();
                onClose();
              }}
              className={` w-[75px] block py-1.5 text-sm text-white font-semibold rounded-lg border border-black/50 dark:border-colorDarkTwo  hover:text-white hover:bg-purple-700 bg-purple-600 hover:border-transparent dark:hover:border-transparent focus:outline-none"
                transition-all ease-in `}
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setShowPreview(false)}
              className={` w-[75px] block py-1.5 text-sm text-white font-semibold rounded-lg border border-black/50 dark:border-colorDarkTwo  hover:text-white hover:bg-purple-700 bg-purple-600 hover:border-transparent dark:hover:border-transparent focus:outline-none"
             transition-all ease-in `}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalSetting;
